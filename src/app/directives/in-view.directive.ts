import { Directive, ElementRef, NgZone, OnDestroy, OnInit, inject, input, signal } from '@angular/core';

@Directive({
  selector: '[appInView]',
  host: {
    '[class.in-view]': 'inView()'
  }
})
export class InViewDirective implements OnInit, OnDestroy {
  private readonly elementRef = inject(ElementRef<HTMLElement>);
  private readonly zone = inject(NgZone);

  readonly once = input(true);
  readonly threshold = input(0.2);
  readonly rootMargin = input('0px');

  protected readonly inView = signal(false);
  private observer?: IntersectionObserver;

  ngOnInit(): void {
    if (typeof IntersectionObserver === 'undefined') {
      this.inView.set(true);
      return;
    }

    this.zone.runOutsideAngular(() => {
      this.observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              this.zone.run(() => this.inView.set(true));
              if (this.once()) {
                this.observer?.disconnect();
                return;
              }
            } else if (!this.once()) {
              this.zone.run(() => this.inView.set(false));
            }
          }
        },
        {
          threshold: this.threshold(),
          rootMargin: this.rootMargin()
        }
      );

      this.observer.observe(this.elementRef.nativeElement);
    });
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}

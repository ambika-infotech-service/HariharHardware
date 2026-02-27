import { Injectable, inject } from '@angular/core';
import { LanguageService } from './language.service';

export interface ProductItem {
  name: string;
  nameKey: string;
}

export interface ProductCategory {
  id: string;
  titleKey: string;
  icon: string;
  items: ProductItem[];
}

export interface ProductSection {
  id: string;
  titleKey: string;
  icon: string;
  categories: ProductCategory[];
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private languageService = inject(LanguageService);

  private readonly productSections: ProductSection[] = [
    {
      id: 'hardware',
      titleKey: 'products.sections.hardware.title',
      icon: 'bi bi-wrench',
      categories: [
        {
          id: 'fasteners',
          titleKey: 'products.sections.hardware.fasteners.title',
          icon: 'bi-bouquet',
          items: [
            { name: 'Nails', nameKey: 'products.sections.hardware.fasteners.items.0' },
            { name: 'Screws', nameKey: 'products.sections.hardware.fasteners.items.1' },
            { name: 'Nuts & Bolts', nameKey: 'products.sections.hardware.fasteners.items.2' },
            { name: 'Washers', nameKey: 'products.sections.hardware.fasteners.items.3' },
            { name: 'Anchor Fasteners', nameKey: 'products.sections.hardware.fasteners.items.4' }
          ]
        },
        {
          id: 'hand-tools',
          titleKey: 'products.sections.hardware.handTools.title',
          icon: 'bi-hammer',
          items: [
            { name: 'Hammers', nameKey: 'products.sections.hardware.handTools.items.0' },
            { name: 'Screwdrivers', nameKey: 'products.sections.hardware.handTools.items.1' },
            { name: 'Pliers', nameKey: 'products.sections.hardware.handTools.items.2' },
            { name: 'Spanners & Wrenches', nameKey: 'products.sections.hardware.handTools.items.3' },
            { name: 'Measuring Tools', nameKey: 'products.sections.hardware.handTools.items.4' },
            { name: 'Chisels & Cutters', nameKey: 'products.sections.hardware.handTools.items.5' }
          ]
        },
        {
          id: 'power-tools',
          titleKey: 'products.sections.hardware.powerTools.title',
          icon: 'bi-lightning',
          items: [
            { name: 'Drill Machines', nameKey: 'products.sections.hardware.powerTools.items.0' },
            { name: 'Grinders', nameKey: 'products.sections.hardware.powerTools.items.1' },
            { name: 'Cutting Machines', nameKey: 'products.sections.hardware.powerTools.items.2' },
            { name: 'Heat Guns', nameKey: 'products.sections.hardware.powerTools.items.3' },
            { name: 'Electric Screwdrivers', nameKey: 'products.sections.hardware.powerTools.items.4' }
          ]
        },
        {
          id: 'door-fittings',
          titleKey: 'products.sections.hardware.doorFittings.title',
          icon: 'bi-door-closed',
          items: [
            { name: 'Hinges', nameKey: 'products.sections.hardware.doorFittings.items.0' },
            { name: 'Door Handles & Knobs', nameKey: 'products.sections.hardware.doorFittings.items.1' },
            { name: 'Tower Bolts', nameKey: 'products.sections.hardware.doorFittings.items.2' },
            { name: 'Door Stoppers', nameKey: 'products.sections.hardware.doorFittings.items.3' },
            { name: 'Locks & Padlocks', nameKey: 'products.sections.hardware.doorFittings.items.4' }
          ]
        },
        {
          id: 'safety',
          titleKey: 'products.sections.hardware.safety.title',
          icon: 'bi-shield-check',
          items: [
            { name: 'Safety Gloves', nameKey: 'products.sections.hardware.safety.items.0' },
            { name: 'Safety Goggles', nameKey: 'products.sections.hardware.safety.items.1' },
            { name: 'Helmets', nameKey: 'products.sections.hardware.safety.items.2' },
            { name: 'Ladders', nameKey: 'products.sections.hardware.safety.items.3' }
          ]
        }
      ]
    },
    {
      id: 'plumbing',
      titleKey: 'products.sections.plumbing.title',
      icon: 'bi bi-water',
      categories: [
        {
          id: 'pipes',
          titleKey: 'products.sections.plumbing.pipes.title',
          icon: 'bi-pipe',
          items: [
            { name: 'PVC Pipes', nameKey: 'products.sections.plumbing.pipes.items.0' },
            { name: 'CPVC Pipes', nameKey: 'products.sections.plumbing.pipes.items.1' },
            { name: 'UPVC Pipes', nameKey: 'products.sections.plumbing.pipes.items.2' },
            { name: 'GI Pipes', nameKey: 'products.sections.plumbing.pipes.items.3' },
            { name: 'HDPE Pipes', nameKey: 'products.sections.plumbing.pipes.items.4' },
            { name: 'PPR Pipes', nameKey: 'products.sections.plumbing.pipes.items.5' }
          ]
        },
        {
          id: 'pipe-fittings',
          titleKey: 'products.sections.plumbing.pipeFittings.title',
          icon: 'bi-diagram-3',
          items: [
            { name: 'Elbows', nameKey: 'products.sections.plumbing.pipeFittings.items.0' },
            { name: 'Tees', nameKey: 'products.sections.plumbing.pipeFittings.items.1' },
            { name: 'Couplers', nameKey: 'products.sections.plumbing.pipeFittings.items.2' },
            { name: 'Reducers', nameKey: 'products.sections.plumbing.pipeFittings.items.3' },
            { name: 'Unions', nameKey: 'products.sections.plumbing.pipeFittings.items.4' },
            { name: 'End Caps', nameKey: 'products.sections.plumbing.pipeFittings.items.5' },
            { name: 'Flanges', nameKey: 'products.sections.plumbing.pipeFittings.items.6' }
          ]
        },
        {
          id: 'valves-taps',
          titleKey: 'products.sections.plumbing.valvesTaps.title',
          icon: 'bi-droplet',
          items: [
            { name: 'Ball Valves', nameKey: 'products.sections.plumbing.valvesTaps.items.0' },
            { name: 'Gate Valves', nameKey: 'products.sections.plumbing.valvesTaps.items.1' },
            { name: 'Angle Valves', nameKey: 'products.sections.plumbing.valvesTaps.items.2' },
            { name: 'Bib Cocks', nameKey: 'products.sections.plumbing.valvesTaps.items.3' },
            { name: 'Pillar Cocks', nameKey: 'products.sections.plumbing.valvesTaps.items.4' },
            { name: 'Mixer Taps', nameKey: 'products.sections.plumbing.valvesTaps.items.5' }
          ]
        },
        {
          id: 'bathroom-kitchen',
          titleKey: 'products.sections.plumbing.bathroomKitchen.title',
          icon: 'bi-house',
          items: [
            { name: 'Shower Heads', nameKey: 'products.sections.plumbing.bathroomKitchen.items.0' },
            { name: 'Flexible Hoses', nameKey: 'products.sections.plumbing.bathroomKitchen.items.1' },
            { name: 'Sink Couplings', nameKey: 'products.sections.plumbing.bathroomKitchen.items.2' },
            { name: 'Bottle Traps', nameKey: 'products.sections.plumbing.bathroomKitchen.items.3' },
            { name: 'Floor Traps', nameKey: 'products.sections.plumbing.bathroomKitchen.items.4' }
          ]
        },
        {
          id: 'plumbing-tools',
          titleKey: 'products.sections.plumbing.plumbingTools.title',
          icon: 'bi-tools',
          items: [
            { name: 'Pipe Wrenches', nameKey: 'products.sections.plumbing.plumbingTools.items.0' },
            { name: 'Pipe Cutters', nameKey: 'products.sections.plumbing.plumbingTools.items.1' },
            { name: 'Teflon Tape', nameKey: 'products.sections.plumbing.plumbingTools.items.2' },
            { name: 'Solvent Cement', nameKey: 'products.sections.plumbing.plumbingTools.items.3' },
            { name: 'Rubber Gaskets', nameKey: 'products.sections.plumbing.plumbingTools.items.4' },
            { name: 'Pipe Clamps', nameKey: 'products.sections.plumbing.plumbingTools.items.5' }
          ]
        }
      ]
    },
    {
      id: 'paints',
      titleKey: 'products.sections.paints.title',
      icon: 'bi bi-palette',
      categories: [
        {
          id: 'wall-paints',
          titleKey: 'products.sections.paints.wallPaints.title',
          icon: 'bi-paint-bucket',
          items: [
            { name: 'Interior Wall Paints', nameKey: 'products.sections.paints.wallPaints.items.0' },
            { name: 'Exterior Wall Paints', nameKey: 'products.sections.paints.wallPaints.items.1' },
            { name: 'Emulsion Paints', nameKey: 'products.sections.paints.wallPaints.items.2' },
            { name: 'Distemper', nameKey: 'products.sections.paints.wallPaints.items.3' }
          ]
        },
        {
          id: 'industrial-paints',
          titleKey: 'products.sections.paints.industrialPaints.title',
          icon: 'bi-shield',
          items: [
            { name: 'Enamel Paints', nameKey: 'products.sections.paints.industrialPaints.items.0' },
            { name: 'Anti-Rust Paints', nameKey: 'products.sections.paints.industrialPaints.items.1' },
            { name: 'Heat-Resistant Paints', nameKey: 'products.sections.paints.industrialPaints.items.2' }
          ]
        },
        {
          id: 'surface-prep',
          titleKey: 'products.sections.paints.surfacePrep.title',
          icon: 'bi-brush',
          items: [
            { name: 'Primers', nameKey: 'products.sections.paints.surfacePrep.items.0' },
            { name: 'Wall Putty', nameKey: 'products.sections.paints.surfacePrep.items.1' },
            { name: 'Waterproofing Coatings', nameKey: 'products.sections.paints.surfacePrep.items.2' }
          ]
        },
        {
          id: 'paint-finishes',
          titleKey: 'products.sections.paints.paintFinishes.title',
          icon: 'bi-brightness-high',
          items: [
            { name: 'Matte Finish', nameKey: 'products.sections.paints.paintFinishes.items.0' },
            { name: 'Gloss Finish', nameKey: 'products.sections.paints.paintFinishes.items.1' },
            { name: 'Satin Finish', nameKey: 'products.sections.paints.paintFinishes.items.2' },
            { name: 'Texture Paints', nameKey: 'products.sections.paints.paintFinishes.items.3' }
          ]
        },
        {
          id: 'painting-tools',
          titleKey: 'products.sections.paints.paintingTools.title',
          icon: 'bi-hammer',
          items: [
            { name: 'Paint Brushes', nameKey: 'products.sections.paints.paintingTools.items.0' },
            { name: 'Rollers', nameKey: 'products.sections.paints.paintingTools.items.1' },
            { name: 'Roller Trays', nameKey: 'products.sections.paints.paintingTools.items.2' },
            { name: 'Scrapers', nameKey: 'products.sections.paints.paintingTools.items.3' },
            { name: 'Sandpaper', nameKey: 'products.sections.paints.paintingTools.items.4' }
          ]
        },
        {
          id: 'thinners',
          titleKey: 'products.sections.paints.thinnersChemicals.title',
          icon: 'bi-droplet',
          items: [
            { name: 'Paint Thinner', nameKey: 'products.sections.paints.thinnersChemicals.items.0' },
            { name: 'Turpentine Oil', nameKey: 'products.sections.paints.thinnersChemicals.items.1' },
            { name: 'Paint Removers', nameKey: 'products.sections.paints.thinnersChemicals.items.2' }
          ]
        },
        {
          id: 'wood-polish',
          titleKey: 'products.sections.paints.woodPolish.title',
          icon: 'bi-tree',
          items: [
            { name: 'Polish', nameKey: 'products.sections.paints.woodPolish.items.0' },
            { name: 'Varnish', nameKey: 'products.sections.paints.woodPolish.items.1' },
            { name: 'Stain', nameKey: 'products.sections.paints.woodPolish.items.2' }
          ]
        }
      ]
    },
    {
      id: 'construction',
      titleKey: 'products.sections.construction.title',
      icon: 'bi bi-bricks',
      categories: [
        {
          id: 'cement',
          titleKey: 'products.sections.construction.cement.title',
          icon: 'bi-cube',
          items: [
            { name: 'Ordinary Portland Cement', nameKey: 'products.sections.construction.cement.items.0' },
            { name: 'White Cement', nameKey: 'products.sections.construction.cement.items.1' }
          ]
        },
        {
          id: 'tile-materials',
          titleKey: 'products.sections.construction.tileMaterials.title',
          icon: 'bi-square-fill',
          items: [
            { name: 'Tile Adhesives', nameKey: 'products.sections.construction.tileMaterials.items.0' },
            { name: 'Tile Grout', nameKey: 'products.sections.construction.tileMaterials.items.1' }
          ]
        },
        {
          id: 'gypsum',
          titleKey: 'products.sections.construction.gypsum.title',
          icon: 'bi-cloud',
          items: [
            { name: 'Gypsum Boards', nameKey: 'products.sections.construction.gypsum.items.0' },
            { name: 'Joint Compound', nameKey: 'products.sections.construction.gypsum.items.1' }
          ]
        },
        {
          id: 'waterproofing',
          titleKey: 'products.sections.construction.waterproofing.title',
          icon: 'bi-water',
          items: [
            { name: 'Liquid Waterproofing', nameKey: 'products.sections.construction.waterproofing.items.0' },
            { name: 'Waterproofing Sheets', nameKey: 'products.sections.construction.waterproofing.items.1' },
            { name: 'Sealants', nameKey: 'products.sections.construction.waterproofing.items.2' }
          ]
        }
      ]
    },
    {
      id: 'electrical',
      titleKey: 'products.sections.electrical.title',
      icon: 'bi bi-lightbulb',
      categories: [
        {
          id: 'switches',
          titleKey: 'products.sections.electrical.switches.title',
          icon: 'bi-toggle-on',
          items: [
            { name: 'Switches', nameKey: 'products.sections.electrical.switches.items.0' },
            { name: 'Sockets', nameKey: 'products.sections.electrical.switches.items.1' },
            { name: 'Switch Boards', nameKey: 'products.sections.electrical.switches.items.2' }
          ]
        },
        {
          id: 'lighting',
          titleKey: 'products.sections.electrical.lighting.title',
          icon: 'bi-lamp',
          items: [
            { name: 'LED Bulbs', nameKey: 'products.sections.electrical.lighting.items.0' },
            { name: 'Tube Lights', nameKey: 'products.sections.electrical.lighting.items.1' },
            { name: 'Fixtures', nameKey: 'products.sections.electrical.lighting.items.2' }
          ]
        },
        {
          id: 'wiring',
          titleKey: 'products.sections.electrical.wiring.title',
          icon: 'bi-lightning',
          items: [
            { name: 'Wires & Cables', nameKey: 'products.sections.electrical.wiring.items.0' },
            { name: 'MCBs', nameKey: 'products.sections.electrical.wiring.items.1' },
            { name: 'Fuse Units', nameKey: 'products.sections.electrical.wiring.items.2' },
            { name: 'Extension Boards', nameKey: 'products.sections.electrical.wiring.items.3' }
          ]
        }
      ]
    },
    {
      id: 'adhesives',
      titleKey: 'products.sections.adhesives.title',
      icon: 'bi bi-box',
      categories: [
        {
          id: 'adhesives-glues',
          titleKey: 'products.sections.adhesives.adhesivesGlues.title',
          icon: 'bi-droplet',
          items: [
            { name: 'Wood Adhesive', nameKey: 'products.sections.adhesives.adhesivesGlues.items.0' },
            { name: 'Construction Adhesive', nameKey: 'products.sections.adhesives.adhesivesGlues.items.1' },
            { name: 'Instant Adhesive', nameKey: 'products.sections.adhesives.adhesivesGlues.items.2' }
          ]
        },
        {
          id: 'sealants',
          titleKey: 'products.sections.adhesives.sealants.title',
          icon: 'bi-shield-check',
          items: [
            { name: 'Clear Sealant', nameKey: 'products.sections.adhesives.sealants.items.0' },
            { name: 'Colored Sealant', nameKey: 'products.sections.adhesives.sealants.items.1' },
            { name: 'Acoustic Sealant', nameKey: 'products.sections.adhesives.sealants.items.2' }
          ]
        },
        {
          id: 'tapes',
          titleKey: 'products.sections.adhesives.tapes.title',
          icon: 'bi-tape',
          items: [
            { name: 'Insulation Tape', nameKey: 'products.sections.adhesives.tapes.items.0' },
            { name: 'Duct Tape', nameKey: 'products.sections.adhesives.tapes.items.1' },
            { name: 'Electrical Tape', nameKey: 'products.sections.adhesives.tapes.items.2' }
          ]
        },
        {
          id: 'misc',
          titleKey: 'products.sections.adhesives.misc.title',
          icon: 'bi-box',
          items: [
            { name: 'Lubricants', nameKey: 'products.sections.adhesives.misc.items.0' },
            { name: 'Cleaning Brushes', nameKey: 'products.sections.adhesives.misc.items.1' },
            { name: 'Buckets', nameKey: 'products.sections.adhesives.misc.items.2' },
            { name: 'Rope & Net', nameKey: 'products.sections.adhesives.misc.items.3' },
            { name: 'Tarpaulin Sheets', nameKey: 'products.sections.adhesives.misc.items.4' }
          ]
        }
      ]
    }
  ];

  getProductSections(): ProductSection[] {
    return this.productSections.map(section => ({
      ...section,
      title: this.languageService.translate(section.titleKey),
      categories: section.categories.map(category => ({
        ...category,
        title: this.languageService.translate(category.titleKey),
        items: category.items.map(item => ({
          ...item,
          name: this.getTranslatedName(item)
        }))
      }))
    })) as any;
  }

  private getTranslatedName(item: ProductItem): string {
    const translated = this.languageService.translate(item.nameKey) as string;
    // If translation returns the key itself (not found), use the English name as fallback
    return translated === item.nameKey ? item.name : translated;
  }

  getProductsByCategory(categoryId: string): ProductCategory | undefined {
    for (const section of this.productSections) {
      const category = section.categories.find(cat => cat.id === categoryId);
      if (category) {
        return {
          ...category,
          title: this.languageService.translate(category.titleKey),
          items: category.items.map(item => ({
            ...item,
            name: this.getTranslatedName(item)
          }))
        } as any;
      }
    }
    return undefined;
  }
}

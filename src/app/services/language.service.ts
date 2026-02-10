import { Injectable, signal } from '@angular/core';

export type Language = 'en' | 'gu' | 'hi' | 'mr';

export interface Translation {
  [key: string]: string | Translation;
}

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private currentLanguage = signal<Language>('en');

  readonly language = this.currentLanguage.asReadonly();

  private translations: Record<Language, Translation> = {
    en: {
      nav: {
        home: 'Home',
        products: 'Products',
        about: 'About',
        contact: 'Contact'
      },
      home: {
        headline: 'Quality Hardware & Pipe Fittings Since 2002',
        subheadline: 'Your Trusted Supplier for Pipes, Valves, and Plumbing Solutions',
        valueProps: {
          quality: {
            title: 'Premium Quality',
            desc: 'Sourced from trusted manufacturers, built to last'
          },
          availability: {
            title: 'Ready Stock',
            desc: 'Wide inventory of commonly needed items'
          },
          reliability: {
            title: 'Reliable Service',
            desc: '22+ years serving contractors and builders'
          }
        },
        categories: {
          title: 'What We Supply',
          pipes: 'Pipes & Tubes',
          fittings: 'Pipe Fittings',
          valves: 'Valves & Taps',
          accessories: 'Hardware Accessories',
          plumbing: 'Plumbing Supplies',
          industrial: 'Industrial Fittings'
        },
        cta: {
          title: 'Need a Quote?',
          desc: 'Call us or send your requirements',
          callButton: 'Call Now',
          whatsappButton: 'WhatsApp',
          quoteButton: 'Request Quote'
        }
      },
      products: {
        title: 'Products & Services',
        subtitle: 'Comprehensive range of hardware and plumbing supplies',
        categories: {
          pipes: {
            title: 'Pipes & Tubes',
            items: 'GI pipes, MS pipes, PVC pipes, CPVC pipes, HDPE pipes, Drainage pipes'
          },
          fittings: {
            title: 'Pipe Fittings',
            items: 'Elbows, Tees, Reducers, Couplings, Unions, Nipples, Caps, Plugs'
          },
          valves: {
            title: 'Valves & Controls',
            items: 'Gate valves, Globe valves, Ball valves, Check valves, Butterfly valves'
          },
          flanges: {
            title: 'Flanges',
            items: 'Slip-on flanges, Weld neck flanges, Blind flanges, Threaded flanges'
          },
          accessories: {
            title: 'Hardware & Accessories',
            items: 'Fasteners, Clamps, Brackets, Gaskets, Sealing materials'
          },
          plumbing: {
            title: 'Plumbing Supplies',
            items: 'Taps, Showers, Bathroom fittings, Kitchen fittings, Water tanks'
          }
        },
        contact: 'For specific brands, sizes, or bulk orders, please contact us directly.'
      },
      about: {
        title: 'About Harihar Hardware',
        established: 'Established in 2002',
        story: {
          p1: 'Harihar Hardware has been a trusted name in the hardware and pipe fittings industry for over two decades. What started as a small local supplier has grown into a reliable source for contractors, plumbers, and builders across the region.',
          p2: 'We specialize in providing quality pipes, fittings, valves, and plumbing supplies. Our focus has always been on maintaining good stock levels of commonly needed items, sourcing from reputable manufacturers, and offering reliable service.',
          p3: 'Whether you need standard fittings for a residential project or specialized industrial components, we work to fulfill your requirements efficiently.'
        },
        why: {
          title: 'Why Choose Us',
          experience: {
            title: '22+ Years Experience',
            desc: 'Deep knowledge of products and industry requirements'
          },
          quality: {
            title: 'Quality Products',
            desc: 'We source from established, trusted manufacturers'
          },
          service: {
            title: 'Personal Service',
            desc: 'Direct communication, quick responses, practical solutions'
          },
          stock: {
            title: 'Ready Inventory',
            desc: 'Good stock of common items for immediate supply'
          }
        }
      },
      contact: {
        title: 'Contact Us',
        subtitle: 'Get in touch for quotes, inquiries, or bulk orders',
        info: {
          phone: 'Phone',
          whatsapp: 'WhatsApp',
          email: 'Email',
          address: 'Address',
          addressValue: 'Ground floor, Krishna Complex, Opposite Ambika Dalvada, Gota Cross Road, Ahmedabad-382481',
          hours: 'Business Hours',
          hoursValue: 'Monday - Saturday: 8:00 AM - 8:00 PM',
          sundayValue: 'Sunday: 8:00 AM - 1:00 PM',
          directions: 'Get Directions',
          getDirections: 'View on Google Maps',
          googleBusiness: 'Google Business',
          viewProfile: 'View Our Profile'
        },
        form: {
          title: 'Send Us Your Requirements',
          name: 'Your Name',
          phone: 'Phone Number',
          email: 'Email (Optional)',
          message: 'Your Requirements',
          messagePlaceholder: 'Please describe what you need - product names, quantities, sizes, etc.',
          submit: 'Submit Inquiry',
          success: 'Thank you! We will contact you shortly.',
          nameRequired: 'Name is required',
          phoneRequired: 'Phone number is required',
          phoneInvalid: 'Please enter a valid 10-digit phone number',
          messageRequired: 'Please describe your requirements'
        }
      },
      footer: {
        about: 'About',
        aboutText: 'Quality hardware and pipe fittings supplier since 2002. Serving contractors, plumbers, and builders.',
        quickLinks: 'Quick Links',
        contactInfo: 'Contact Info',
        hours: 'Business Hours',
        hoursText: 'Mon - Sat: 8:00 AM - 8:00 PM',
        sundayText: 'Sunday: 8:00 AM - 1:00 PM',
        copyright: '© 2026 Harihar Hardware & Paints. All rights reserved.',
        getDirections: 'Get Directions',
        googleProfile: 'Google Profile'
      }
    },
    gu: {
      nav: {
        home: 'હોમ',
        products: 'ઉત્પાદનો',
        about: 'વિશે',
        contact: 'સંપર્ક'
      },
      home: {
        headline: '2002 થી ગુણવત્તા હાર્ડવેર અને પાઇપ ફિટિંગ્સ',
        subheadline: 'પાઇપ્સ, વાલ્વ અને પ્લમ્બિંગ સોલ્યુશન્સ માટે તમારા વિશ્વાસુ સપ્લાયર',
        valueProps: {
          quality: {
            title: 'પ્રીમિયમ ગુણવત્તા',
            desc: 'વિશ્વાસુ ઉત્પાદકો પાસેથી, ટકાઊ બનાવેલ'
          },
          availability: {
            title: 'તૈયાર સ્ટોક',
            desc: 'સામાન્ય રીતે જરૂરી વસ્તુઓનો વિશાળ ભંડાર'
          },
          reliability: {
            title: 'વિશ્વાસુ સેવા',
            desc: 'કોન્ટ્રાક્ટર અને બિલ્ડરોને 22+ વર્ષથી સેવા આપી રહ્યા છીએ'
          }
        },
        categories: {
          title: 'અમે શું સપ્લાય કરીએ છીએ',
          pipes: 'પાઇપ્સ અને ટ્યુબ્સ',
          fittings: 'પાઇપ ફિટિંગ્સ',
          valves: 'વાલ્વ અને નળ',
          accessories: 'હાર્ડવેર એક્સેસરીઝ',
          plumbing: 'પ્લમ્બિંગ સપ્લાય',
          industrial: 'ઔદ્યોગિક ફિટિંગ્સ'
        },
        cta: {
          title: 'ભાવ જોઈએ છે?',
          desc: 'અમને કૉલ કરો અથવા તમારી જરૂરિયાતો મોકલો',
          callButton: 'હમણાં કૉલ કરો',
          whatsappButton: 'વોટ્સએપ',
          quoteButton: 'ભાવ માગો'
        }
      },
      products: {
        title: 'ઉત્પાદનો અને સેવાઓ',
        subtitle: 'હાર્ડવેર અને પ્લમ્બિંગ સપ્લાયની વ્યાપક શ્રેણી',
        categories: {
          pipes: {
            title: 'પાઇપ્સ અને ટ્યુબ્સ',
            items: 'જીઆઇ પાઇપ, એમએસ પાઇપ, પીવીસી પાઇપ, સીપીવીસી પાઇપ, એચડીપીઇ પાઇપ, ડ્રેનેજ પાઇપ'
          },
          fittings: {
            title: 'પાઇપ ફિટિંગ્સ',
            items: 'એલ્બો, ટી, રિડ્યુસર, કપલિંગ, યુનિયન, નિપલ, કેપ, પ્લગ'
          },
          valves: {
            title: 'વાલ્વ અને કંટ્રોલ્સ',
            items: 'ગેટ વાલ્વ, ગ્લોબ વાલ્વ, બોલ વાલ્વ, ચેક વાલ્વ, બટરફ્લાય વાલ્વ'
          },
          flanges: {
            title: 'ફ્લેંજિસ',
            items: 'સ્લિપ-ઓન ફ્લેંજ, વેલ્ડ નેક ફ્લેંજ, બ્લાઇન્ડ ફ્લેંજ, થ્રેડેડ ફ્લેંજ'
          },
          accessories: {
            title: 'હાર્ડવેર અને એક્સેસરીઝ',
            items: 'ફાસ્ટનર્સ, ક્લેમ્પ્સ, બ્રેકેટ્સ, ગાસ્કેટ્સ, સીલિંગ સામગ્રી'
          },
          plumbing: {
            title: 'પ્લમ્બિંગ સપ્લાય',
            items: 'નળ, શાવર, બાથરૂમ ફિટિંગ્સ, કિચન ફિટિંગ્સ, પાણીની ટાંકી'
          }
        },
        contact: 'વિશિષ્ટ બ્રાન્ડ્સ, માપ અથવા બલ્ક ઓર્ડર માટે, કૃપા કરીને સીધા અમારો સંપર્ક કરો.'
      },
      about: {
        title: 'હરિહર હાર્ડવેર વિશે',
        established: '2002 માં સ્થાપના',
        story: {
          p1: 'હરિહર હાર્ડવેર બે દાયકાઓથી વધુ સમયથી હાર્ડવેર અને પાઇપ ફિટિંગ્સ ઉદ્યોગમાં વિશ્વાસુ નામ છે. જે નાના સ્થાનિક સપ્લાયર તરીકે શરૂ થયું તે સમગ્ર પ્રદેશમાં કોન્ટ્રાક્ટર, પ્લમ્બર અને બિલ્ડરો માટે વિશ્વાસુ સ્ત્રોત બની ગયું છે.',
          p2: 'અમે ગુણવત્તાયુક્ત પાઇપ્સ, ફિટિંગ્સ, વાલ્વ અને પ્લમ્બિંગ સપ્લાય પૂરી પાડવામાં વિશેષતા ધરાવીએ છીએ. અમારું ધ્યાન હંમેશા સામાન્ય રીતે જરૂરી વસ્તુઓના સારા સ્ટોક સ્તરો જાળવવા, પ્રતિષ્ઠિત ઉત્પાદકો પાસેથી સોર્સિંગ અને વિશ્વાસુ સેવા પ્રદાન કરવા પર રહ્યું છે.',
          p3: 'ભલે તમને રેસિડેન્શિયલ પ્રોજેક્ટ માટે સ્ટાન્ડર્ડ ફિટિંગ્સની જરૂર હોય કે વિશિષ્ટ ઔદ્યોગિક ઘટકોની, અમે તમારી જરૂરિયાતોને કાર્યક્ષમ રીતે પૂર્ણ કરવા માટે કામ કરીએ છીએ.'
        },
        why: {
          title: 'અમને શા માટે પસંદ કરો',
          experience: {
            title: '22+ વર્ષનો અનુભવ',
            desc: 'ઉત્પાદનો અને ઉદ્યોગની જરૂરિયાતોનું ઊંડું જ્ઞાન'
          },
          quality: {
            title: 'ગુણવત્તા ઉત્પાદનો',
            desc: 'અમે સ્થાપિત, વિશ્વાસુ ઉત્પાદકો પાસેથી સોર્સ કરીએ છીએ'
          },
          service: {
            title: 'વ્યક્તિગત સેવા',
            desc: 'સીધો સંવાદ, ઝડપી પ્રતિસાદ, વ્યવહારુ ઉકેલો'
          },
          stock: {
            title: 'તૈયાર ઇન્વેન્ટરી',
            desc: 'તાત્કાલિક સપ્લાય માટે સામાન્ય વસ્તુઓનો સારો સ્ટોક'
          }
        }
      },
      contact: {
        title: 'અમારો સંપર્ક કરો',
        subtitle: 'ભાવ, પૂછપરછ અથવા બલ્ક ઓર્ડર માટે સંપર્કમાં રહો',
        info: {
          phone: 'ફોન',
          whatsapp: 'વોટ્સએપ',
          email: 'ઇમેઇલ',
          address: 'સરનામું',
          addressValue: 'ગ્રાઉન્ડ ફ્લોર, કૃષ્ણા કામ્પ્લેક્સ, અમ્બિકા ડાળવાડા સામે, ગોતા ક્રોસ રોડ, અમદાવાદ-382481',
          hours: 'વ્યવસાય સમય',
          hoursValue: 'સોમવાર - શનિવાર: સવારે 8:00 - સાંજે 8:00',
          sundayValue: 'રવિવાર: સવારે 8:00 - બપોરે 1:00',
          directions: 'દિશાઓ મેળવો',
          getDirections: 'Google નકશા પર જુઓ',
          googleBusiness: 'Google બિઝનેસ',
          viewProfile: 'અમારી પ્રોફાઇલ જુઓ'
        },
        form: {
          title: 'અમને તમારી જરૂરિયાતો મોકલો',
          name: 'તમારું નામ',
          phone: 'ફોન નંબર',
          email: 'ઇમેઇલ (વૈકલ્પિક)',
          message: 'તમારી જરૂરિયાતો',
          messagePlaceholder: 'કૃપા કરીને તમને શું જોઈએ છે તેનું વર્ણન કરો - ઉત્પાદનના નામ, જથ્થો, માપ વગેરે.',
          submit: 'પૂછપરછ સબમિટ કરો',
          success: 'આભાર! અમે ટૂંક સમયમાં તમારો સંપર્ક કરીશું.',
          nameRequired: 'નામ જરૂરી છે',
          phoneRequired: 'ફોન નંબર જરૂરી છે',
          phoneInvalid: 'કૃપા કરીને માન્ય 10-અંકનો ફોન નંબર દાખલ કરો',
          messageRequired: 'કૃપા કરીને તમારી જરૂરિયાતોનું વર્ણન કરો'
        }
      },
      footer: {
        about: 'વિશે',
        aboutText: '2002 થી ગુણવત્તા હાર્ડવેર અને પેઇન્ટ્સ સપ્લાયર. કોન્ટ્રાક્ટર, પ્લમ્બર અને બિલ્ડરોને સેવા આપી રહ્યા છીએ.',
        quickLinks: 'ઝડપી લિંક્સ',
        contactInfo: 'સંપર્ક માહિતી',
        hours: 'વ્યવસાય સમય',
        hoursText: 'સોમ - શનિ: સવારે 8:00 - સાંજે 8:00',
        sundayText: 'રવિવાર: સવારે 8:00 - બપોરે 1:00',
        copyright: '© 2026 હરિહર હાર્ડવેર & પેઇન્ટ્સ. બધા અધિકારો આરક્ષિત.',
        getDirections: 'દિશાઓ મેળવો',
        googleProfile: 'Google પ્રોફાઇલ'
      }
    },
    hi: {
      nav: {
        home: 'होम',
        products: 'उत्पाद',
        about: 'परिचय',
        contact: 'संपर्क'
      },
      home: {
        headline: '2002 से गुणवत्ता हार्डवेयर और पाइप फिटिंग',
        subheadline: 'पाइप, वाल्व और प्लंबिंग समाधान के लिए आपका विश्वसनीय आपूर्तिकर्ता',
        valueProps: {
          quality: {
            title: 'प्रीमियम गुणवत्ता',
            desc: 'विश्वसनीय निर्माताओं से प्राप्त, टिकाऊ'
          },
          availability: {
            title: 'तैयार स्टॉक',
            desc: 'आम तौर पर जरूरी वस्तुओं की विस्तृत सूची'
          },
          reliability: {
            title: 'विश्वसनीय सेवा',
            desc: 'ठेकेदारों और बिल्डरों की सेवा 22+ वर्षों से'
          }
        },
        categories: {
          title: 'हम क्या सप्लाई करते हैं',
          pipes: 'पाइप और ट्यूब',
          fittings: 'पाइप फिटिंग',
          valves: 'वाल्व और नल',
          accessories: 'हार्डवेयर सामान',
          plumbing: 'प्लंबिंग सप्लाई',
          industrial: 'औद्योगिक फिटिंग'
        },
        cta: {
          title: 'भाव चाहिए?',
          desc: 'हमें कॉल करें या अपनी आवश्यकताएं भेजें',
          callButton: 'अभी कॉल करें',
          whatsappButton: 'व्हाट्सएप',
          quoteButton: 'भाव मांगें'
        }
      },
      products: {
        title: 'उत्पाद और सेवाएं',
        subtitle: 'हार्डवेयर और प्लंबिंग सप्लाई की व्यापक रेंज',
        categories: {
          pipes: {
            title: 'पाइप और ट्यूब',
            items: 'जीआई पाइप, एमएस पाइप, पीवीसी पाइप, सीपीवीसी पाइप, एचडीपीई पाइप, ड्रेनेज पाइप'
          },
          fittings: {
            title: 'पाइप फिटिंग',
            items: 'एल्बो, टी, रिड्यूसर, कपलिंग, यूनियन, निप्पल, कैप, प्लग'
          },
          valves: {
            title: 'वाल्व और नियंत्रण',
            items: 'गेट वाल्व, ग्लोब वाल्व, बॉल वाल्व, चेक वाल्व, बटरफ्लाई वाल्व'
          },
          flanges: {
            title: 'फ्लैंज',
            items: 'स्लिप-ऑन फ्लैंज, वेल्ड नेक फ्लैंज, ब्लाइंड फ्लैंज, थ्रेडेड फ्लैंज'
          },
          accessories: {
            title: 'हार्डवेयर और सामान',
            items: 'फास्टनर, क्लैंप, ब्रैकेट, गैस्केट, सीलिंग सामग्री'
          },
          plumbing: {
            title: 'प्लंबिंग सप्लाई',
            items: 'नल, शावर, बाथरूम फिटिंग, किचन फिटिंग, पानी की टंकी'
          }
        },
        contact: 'विशिष्ट ब्रांड, माप या थोक ऑर्डर के लिए, कृपया सीधे हमसे संपर्क करें।'
      },
      about: {
        title: 'हरिहर हार्डवेयर के बारे में',
        established: '2002 में स्थापित',
        story: {
          p1: 'हरिहर हार्डवेयर दो दशकों से अधिक समय से हार्डवेयर और पाइप फिटिंग उद्योग में एक विश्वसनीय नाम रहा है। जो एक छोटे स्थानीय आपूर्तिकर्ता के रूप में शुरू हुआ, वह पूरे क्षेत्र में ठेकेदारों, प्लंबरों और बिल्डरों के लिए एक विश्वसनीय स्रोत बन गया है।',
          p2: 'हम गुणवत्ता पाइप, फिटिंग, वाल्व और प्लंबिंग सप्लाई प्रदान करने में विशेषज्ञ हैं। हमारा ध्यान हमेशा आम तौर पर जरूरी वस्तुओं के अच्छे स्टॉक स्तर बनाए रखने, प्रतिष्ठित निर्माताओं से सोर्सिंग और विश्वसनीय सेवा प्रदान करने पर रहा है।',
          p3: 'चाहे आपको आवासीय परियोजना के लिए मानक फिटिंग की आवश्यकता हो या विशेष औद्योगिक घटकों की, हम आपकी आवश्यकताओं को कुशलतापूर्वक पूरा करने के लिए काम करते हैं।'
        },
        why: {
          title: 'हमें क्यों चुनें',
          experience: {
            title: '22+ वर्षों का अनुभव',
            desc: 'उत्पादों और उद्योग की आवश्यकताओं का गहरा ज्ञान'
          },
          quality: {
            title: 'गुणवत्ता उत्पाद',
            desc: 'हम स्थापित, विश्वसनीय निर्माताओं से स्रोत करते हैं'
          },
          service: {
            title: 'व्यक्तिगत सेवा',
            desc: 'सीधा संचार, त्वरित प्रतिक्रिया, व्यावहारिक समाधान'
          },
          stock: {
            title: 'तैयार इन्वेंटरी',
            desc: 'तत्काल सप्लाई के लिए सामान्य वस्तुओं का अच्छा स्टॉक'
          }
        }
      },
      contact: {
        title: 'हमसे संपर्क करें',
        subtitle: 'भाव, पूछताछ या थोक ऑर्डर के लिए संपर्क में रहें',
        info: {
          phone: 'फोन',
          whatsapp: 'व्हाट्सएप',
          email: 'ईमेल',
          address: 'पता',
          addressValue: 'ग्राउंड फ्लोर, कृष्णा कॉम्प्लेक्स, अंबिका दालवाडा के सामने, गोता क्रॉस रोड, अहमदाबाद-382481',
          hours: 'व्यवसाय समय',
          hoursValue: 'सोमवार - शनिवार: सुबह 8:00 - शाम 8:00',
          sundayValue: 'रविवार: सुबह 8:00 - दोपहर 1:00',
          directions: 'दिशानिर्देश प्राप्त करें',
          getDirections: 'Google मानचित्र पर देखें',
          googleBusiness: 'Google व्यवसाय',
          viewProfile: 'हमारी प्रोफाइल देखें'
        },
        form: {
          title: 'हमें अपनी आवश्यकताएं भेजें',
          name: 'आपका नाम',
          phone: 'फोन नंबर',
          email: 'ईमेल (वैकल्पिक)',
          message: 'आपकी आवश्यकताएं',
          messagePlaceholder: 'कृपया बताएं कि आपको क्या चाहिए - उत्पाद के नाम, मात्रा, माप, आदि।',
          submit: 'पूछताछ सबमिट करें',
          success: 'धन्यवाद! हम जल्द ही आपसे संपर्क करेंगे।',
          nameRequired: 'नाम आवश्यक है',
          phoneRequired: 'फोन नंबर आवश्यक है',
          phoneInvalid: 'कृपया एक मान्य 10-अंकीय फोन नंबर दर्ज करें',
          messageRequired: 'कृपया अपनी आवश्यकताओं का वर्णन करें'
        }
      },
      footer: {
        about: 'परिचय',
        aboutText: '2002 से गुणवत्ता हार्डवेयर और पेंट्स आपूर्तिकर्ता। ठेकेदारों, प्लंबरों और बिल्डरों की सेवा कर रहे हैं।',
        quickLinks: 'त्वरित लिंक',
        contactInfo: 'संपर्क जानकारी',
        hours: 'व्यवसाय समय',
        hoursText: 'सोम - शनि: सुबह 8:00 - शाम 8:00',
        sundayText: 'रविवार: सुबह 8:00 - दोपहर 1:00',
        copyright: '© 2026 हरिहर हार्डवेयर & पेंट्स। सर्वाधिकार सुरक्षित।',
        getDirections: 'दिशानिर्देश प्राप्त करें',
        googleProfile: 'Google प्रोफाइल'
      }
    },
    mr: {
      nav: {
        home: 'होम',
        products: 'उत्पादने',
        about: 'आमच्याबद्दल',
        contact: 'संपर्क'
      },
      home: {
        headline: '2002 पासून दर्जेदार हार्डवेअर आणि पाईप फिटिंग्ज',
        subheadline: 'पाईप्स, वाल्व्ह आणि प्लंबिंग सोल्यूशन्ससाठी तुमचा विश्वासू पुरवठादार',
        valueProps: {
          quality: {
            title: 'प्रीमियम गुणवत्ता',
            desc: 'विश्वासू उत्पादकांकडून, टिकाऊ बनवलेले'
          },
          availability: {
            title: 'तयार स्टॉक',
            desc: 'सामान्यतः आवश्यक वस्तूंचा विस्तृत साठा'
          },
          reliability: {
            title: 'विश्वासार्ह सेवा',
            desc: 'कंत्राटदार आणि बांधकाम व्यावसायिकांना 22+ वर्षांपासून सेवा'
          }
        },
        categories: {
          title: 'आम्ही काय पुरवतो',
          pipes: 'पाईप्स आणि ट्यूब्ज',
          fittings: 'पाईप फिटिंग्ज',
          valves: 'वाल्व्ह आणि नळ',
          accessories: 'हार्डवेअर अॅक्सेसरीज',
          plumbing: 'प्लंबिंग पुरवठा',
          industrial: 'औद्योगिक फिटिंग्ज'
        },
        cta: {
          title: 'भाव हवा?',
          desc: 'आम्हाला कॉल करा किंवा तुमच्या गरजा पाठवा',
          callButton: 'आत्ताच कॉल करा',
          whatsappButton: 'व्हॉट्सअॅप',
          quoteButton: 'भाव मागा'
        }
      },
      products: {
        title: 'उत्पादने आणि सेवा',
        subtitle: 'हार्डवेअर आणि प्लंबिंग पुरवठ्याची व्यापक श्रेणी',
        categories: {
          pipes: {
            title: 'पाईप्स आणि ट्यूब्ज',
            items: 'जीआय पाईप, एमएस पाईप, पीव्हीसी पाईप, सीपीव्हीसी पाईप, एचडीपीई पाईप, ड्रेनेज पाईप'
          },
          fittings: {
            title: 'पाईप फिटिंग्ज',
            items: 'एल्बो, टी, रिड्यूसर, कपलिंग, युनियन, निप्पल, कॅप, प्लग'
          },
          valves: {
            title: 'वाल्व्ह आणि नियंत्रणे',
            items: 'गेट वाल्व्ह, ग्लोब वाल्व्ह, बॉल वाल्व्ह, चेक वाल्व्ह, बटरफ्लाय वाल्व्ह'
          },
          flanges: {
            title: 'फ्लँजेस',
            items: 'स्लिप-ऑन फ्लँज, वेल्ड नेक फ्लँज, ब्लाइंड फ्लँज, थ्रेडेड फ्लँज'
          },
          accessories: {
            title: 'हार्डवेअर आणि अॅक्सेसरीज',
            items: 'फास्टनर्स, क्लॅम्प्स, ब्रॅकेट्स, गॅस्केट्स, सीलिंग साहित्य'
          },
          plumbing: {
            title: 'प्लंबिंग पुरवठा',
            items: 'नळ, शॉवर, बाथरूम फिटिंग्ज, किचन फिटिंग्ज, पाण्याच्या टाक्या'
          }
        },
        contact: 'विशिष्ट ब्रँड, माप किंवा मोठ्या प्रमाणावरील ऑर्डरसाठी, कृपया थेट आमच्याशी संपर्क साधा.'
      },
      about: {
        title: 'हरिहर हार्डवेअर बद्दल',
        established: '2002 मध्ये स्थापना',
        story: {
          p1: 'हरिहर हार्डवेअर दोन दशकांहून अधिक काळापासून हार्डवेअर आणि पाईप फिटिंग्ज उद्योगात एक विश्वासू नाव आहे. जे एक लहान स्थानिक पुरवठादार म्हणून सुरू झाले ते संपूर्ण प्रदेशातील कंत्राटदार, प्लंबर आणि बांधकाम व्यावसायिकांसाठी एक विश्वासू स्रोत बनले आहे.',
          p2: 'आम्ही दर्जेदार पाईप्स, फिटिंग्ज, वाल्व्ह आणि प्लंबिंग पुरवठा प्रदान करण्यात तज्ञ आहोत. आमचे लक्ष नेहमीच सामान्यतः आवश्यक वस्तूंचे चांगले स्टॉक पातळी राखणे, प्रतिष्ठित उत्पादकांकडून सोर्सिंग आणि विश्वासार्ह सेवा देणे यावर राहिले आहे.',
          p3: 'तुम्हाला निवासी प्रकल्पासाठी मानक फिटिंग्ज हव्या असोत किंवा विशेष औद्योगिक घटक हवे असोत, आम्ही तुमच्या गरजा कार्यक्षमतेने पूर्ण करण्यासाठी कार्य करतो.'
        },
        why: {
          title: 'आम्हाला का निवडा',
          experience: {
            title: '22+ वर्षांचा अनुभव',
            desc: 'उत्पादने आणि उद्योगाच्या गरजांचे सखोल ज्ञान'
          },
          quality: {
            title: 'गुणवत्ता उत्पादने',
            desc: 'आम्ही स्थापित, विश्वासू उत्पादकांकडून स्रोत करतो'
          },
          service: {
            title: 'वैयक्तिक सेवा',
            desc: 'थेट संवाद, जलद प्रतिसाद, व्यावहारिक उपाय'
          },
          stock: {
            title: 'तयार इन्व्हेंटरी',
            desc: 'तात्काळ पुरवठ्यासाठी सामान्य वस्तूंचा चांगला स्टॉक'
          }
        }
      },
      contact: {
        title: 'आमच्याशी संपर्क साधा',
        subtitle: 'भाव, चौकशी किंवा मोठ्या प्रमाणावरील ऑर्डरसाठी संपर्कात रहा',
        info: {
          phone: 'फोन',
          whatsapp: 'व्हॉट्सअॅप',
          email: 'ईमेल',
          address: 'पत्ता',
          addressValue: 'ग्राउंड फ्लोर, कृष्णा कॉम्प्लेक्स, अंबिका दाळवाडा समोर, गोता क्रॉस रोड, अहमदाबाद-382481',
          hours: 'व्यवसाय वेळ',
          hoursValue: 'सोमवार - शनिवार: सकाळी 8:00 - संध्याकाळी 8:00',
          sundayValue: 'रविवार: सकाळी 8:00 - दुपारी 1:00',
          directions: 'दिशा मिळवा',
          getDirections: 'Google नकाशावर पहा',
          googleBusiness: 'Google व्यवसाय',
          viewProfile: 'आमची प्रोफाइल पहा'
        },
        form: {
          title: 'आम्हाला तुमच्या गरजा पाठवा',
          name: 'तुमचे नाव',
          phone: 'फोन नंबर',
          email: 'ईमेल (वैकल्पिक)',
          message: 'तुमच्या गरजा',
          messagePlaceholder: 'कृपया तुम्हाला काय हवे आहे याचे वर्णन करा - उत्पादनाची नावे, प्रमाण, माप इ.',
          submit: 'चौकशी सबमिट करा',
          success: 'धन्यवाद! आम्ही लवकरच तुमच्याशी संपर्क साधू.',
          nameRequired: 'नाव आवश्यक आहे',
          phoneRequired: 'फोन नंबर आवश्यक आहे',
          phoneInvalid: 'कृपया वैध 10-अंकी फोन नंबर प्रविष्ट करा',
          messageRequired: 'कृपया तुमच्या गरजांचे वर्णन करा'
        }
      },
      footer: {
        about: 'आमच्याबद्दल',
        aboutText: '2002 पासून दर्जेदार हार्डवेअर आणि पेंट्स पुरवठादार. कंत्राटदार, प्लंबर आणि बांधकाम व्यावसायिकांना सेवा देत आहोत.',
        quickLinks: 'द्रुत दुवे',
        contactInfo: 'संपर्क माहिती',
        hours: 'व्यवसाय वेळ',
        hoursText: 'सोम - शनि: सकाळी 8:00 - संध्याकाळी 8:00',
        sundayText: 'रविवार: सकाळी 8:00 - दुपारी 1:00',
        copyright: '© 2026 हरिहर हार्डवेअर & पेंट्स. सर्व हक्क राखीव.',
        getDirections: 'दिशा मिळवा',
        googleProfile: 'Google प्रोफाइल'
      }
    }
  };

  setLanguage(lang: Language): void {
    this.currentLanguage.set(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('preferredLanguage', lang);
    }
  }

  translate(key: string): string {
    const keys = key.split('.');
    let value: any = this.translations[this.currentLanguage()];

    for (const k of keys) {
      if (value && typeof value === 'object') {
        value = value[k];
      } else {
        return key;
      }
    }

    return typeof value === 'string' ? value : key;
  }

  constructor() {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('preferredLanguage') as Language;
      if (saved && ['en', 'gu', 'hi', 'mr'].includes(saved)) {
        this.currentLanguage.set(saved);
      }
    }
  }
}

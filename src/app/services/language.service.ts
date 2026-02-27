import { Injectable, signal } from '@angular/core';

export type Language = 'en' | 'gu' | 'hi' | 'mr';

export interface Translation {
  [key: string]: string | string[] | Translation;
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
        highlights: {
          sizes: 'Available in multiple sizes & brands',
          orders: 'Bulk & retail orders accepted',
          pricing: 'Call / WhatsApp for price'
        },
        sections: {
          hardware: {
            title: '🔧 Hardware Products',
            fasteners: {
              title: 'Fasteners',
              items: ['Nails', 'Screws', 'Nuts & Bolts', 'Washers', 'Anchor Fasteners']
            },
            handTools: {
              title: 'Hand Tools',
              items: ['Hammers', 'Screwdrivers', 'Pliers', 'Spanners & Wrenches', 'Measuring Tools', 'Chisels & Cutters']
            },
            powerTools: {
              title: 'Power Tools',
              items: ['Drill Machines', 'Grinders', 'Cutting Machines', 'Heat Guns', 'Electric Screwdrivers']
            },
            doorFittings: {
              title: 'Door & Furniture Fittings',
              items: ['Hinges', 'Door Handles & Knobs', 'Tower Bolts', 'Door Stoppers', 'Locks & Padlocks']
            },
            safety: {
              title: 'Safety & Utility Items',
              items: ['Safety Gloves', 'Safety Goggles', 'Helmets', 'Ladders']
            }
          },
          plumbing: {
            title: '🚰 Plumbing & Pipe Fittings',
            pipes: {
              title: 'Pipes',
              items: ['PVC Pipes', 'CPVC Pipes', 'UPVC Pipes', 'GI Pipes', 'HDPE Pipes', 'PPR Pipes']
            },
            pipeFittings: {
              title: 'Pipe Fittings',
              items: ['Elbows', 'Tees', 'Couplers', 'Reducers', 'Unions', 'End Caps', 'Flanges']
            },
            valvesTaps: {
              title: 'Valves & Taps',
              items: ['Ball Valves', 'Gate Valves', 'Angle Valves', 'Bib Cocks', 'Pillar Cocks', 'Mixer Taps']
            },
            bathroomKitchen: {
              title: 'Bathroom & Kitchen Accessories',
              items: ['Shower Heads', 'Flexible Hoses', 'Sink Couplings', 'Bottle Traps', 'Floor Traps']
            },
            plumbingTools: {
              title: 'Plumbing Tools & Consumables',
              items: ['Pipe Wrenches', 'Pipe Cutters', 'Teflon Tape', 'Solvent Cement', 'Rubber Gaskets', 'Pipe Clamps']
            }
          },
          paints: {
            title: '🎨 Paints & Painting Solutions',
            wallPaints: {
              title: 'Wall Paints',
              items: ['Interior Wall Paints', 'Exterior Wall Paints', 'Emulsion Paints', 'Distemper']
            },
            industrialPaints: {
              title: 'Industrial & Metal Paints',
              items: ['Enamel Paints', 'Anti-Rust Paints', 'Heat-Resistant Paints']
            },
            surfacePrep: {
              title: 'Surface Preparation',
              items: ['Primers', 'Wall Putty', 'Waterproofing Coatings']
            },
            paintFinishes: {
              title: 'Paint Finishes',
              items: ['Matte Finish', 'Gloss Finish', 'Satin Finish', 'Texture Paints']
            },
            paintingTools: {
              title: 'Painting Tools',
              items: ['Paint Brushes', 'Rollers', 'Roller Trays', 'Scrapers', 'Sandpaper']
            },
            thinnersChemicals: {
              title: 'Thinners & Chemicals',
              items: ['Paint Thinner', 'Turpentine Oil', 'Paint Removers']
            },
            woodPolish: {
              title: 'Wood Polish & Varnish',
              items: ['Polish', 'Varnish', 'Stain']
            }
          },
          construction: {
            title: '🧱 Construction Materials',
            cement: {
              title: 'Cement',
              items: ['Ordinary Portland Cement', 'White Cement']
            },
            tileMaterials: {
              title: 'Tile Materials',
              items: ['Tile Adhesives', 'Tile Grout']
            },
            gypsum: {
              title: 'Gypsum Products',
              items: ['Gypsum Boards', 'Joint Compound']
            },
            waterproofing: {
              title: 'Waterproofing Chemicals',
              items: ['Liquid Waterproofing', 'Waterproofing Sheets', 'Sealants']
            }
          },
          electrical: {
            title: '💡 Electrical Products',
            switches: {
              title: 'Switches & Accessories',
              items: ['Switches', 'Sockets', 'Switch Boards']
            },
            lighting: {
              title: 'Lighting',
              items: ['LED Bulbs', 'Tube Lights', 'Fixtures']
            },
            wiring: {
              title: 'Wiring & Safety',
              items: ['Wires & Cables', 'MCBs', 'Fuse Units', 'Extension Boards']
            }
          },
          adhesives: {
            title: '🧰 Adhesives, Sealants & Miscellaneous',
            adhesivesGlues: {
              title: 'Adhesives & Glues',
              items: ['Wood Adhesive', 'Construction Adhesive', 'Instant Adhesive']
            },
            sealants: {
              title: 'Silicone Sealants',
              items: ['Clear Sealant', 'Colored Sealant', 'Acoustic Sealant']
            },
            tapes: {
              title: 'Insulation & Tape',
              items: ['Insulation Tape', 'Duct Tape', 'Electrical Tape']
            },
            misc: {
              title: 'Miscellaneous',
              items: ['Lubricants', 'Cleaning Brushes', 'Buckets', 'Rope & Net', 'Tarpaulin Sheets']
            }
          }
        },
        contactInfo: {
          title: 'Need More Information?',
          description: 'For specific product details, availability, pricing, and bulk orders:',
          call: 'Call Us:',
          whatsapp: 'WhatsApp:',
          email: 'Email:',
          sendInquiry: 'Send Inquiry'
        }
      },
      about: {
        title: 'Harihar Hardware & Paints, Gota',
        established: 'Serving Ahmedabad Since 2002',
        story: {
          p1: 'Harihar Hardware & Paint is a well-established and trusted hardware store located at Gota Road, Ahmedabad, serving customers since 2002.',
          p2: 'With over two decades of industry experience, we have built a strong reputation as a reliable supplier of hardware items, pipes, fittings, plumbing materials, and paint products for residential, commercial, and industrial needs.',
          p3: 'What began as a small local hardware shop has grown into a one-stop destination for contractors, plumbers, builders, electricians, and homeowners across Ahmedabad. Our success is driven by quality products, fair pricing, and dependable service.'
        },
        why: {
          title: 'Why Choose Harihar Hardware & Paint',
          experience: {
            title: '20+ Years of Experience',
            desc: 'Proven expertise in hardware, plumbing, and building materials'
          },
          quality: {
            title: 'Trusted Brands',
            desc: 'Quality products sourced from reputed manufacturers'
          },
          service: {
            title: 'Customer-Focused Service',
            desc: 'Knowledgeable staff, honest advice, and prompt support'
          },
          stock: {
            title: 'Convenient Location',
            desc: 'Gota Cross Road, opposite Ambika Dalvada, easy access'
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
        map: {
          title: 'Find Us on the Map'
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
          messageRequired: 'Please describe your requirements',
          comingSoon: 'Contact Form Coming Soon',
          comingSoonDescription: 'Our contact form will be available shortly. In the meantime, please reach out to us directly:',
          callUs: 'Call Us',
          whatsapp: 'WhatsApp',
          chatWithUs: 'Chat with us'
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
        highlights: {
          sizes: 'બહુવિધ માપ અને બ્રાન્ડમાં ઉપલબ્ધ',
          orders: 'બલ્ક અને રિટેઇલ ઓર્ડર સ્વીકારવામાં આવે છે',
          pricing: 'કિંમત માટે કૉલ / વોટ્સએપ કરો'
        },
        sections: {
          hardware: {
            title: '🔧 હાર્ડવેર ઉત્પાદનો',
            fasteners: {
              title: 'ફાસ્ટનર્સ',
              items: ['નખ', 'સ્ક્રૂ', 'નટ અને બોલ્ટ', 'વોશર', 'એન્કર ફાસ્ટનર્સ']
            },
            handTools: {
              title: 'હાથના સાધનો',
              items: ['હથોડીઓ', 'સ્ક્રુડ્રાઇવર્સ', 'પ્લાયર્સ', 'સ્પેનર્સ અને રેંચ', 'માપનાં સાધનો', 'છેણી અને કટર']
            },
            powerTools: {
              title: 'પાવર સાધનો',
              items: ['ડ્રિલ મશીનો', 'ગ્રાઇન્ડર્સ', 'કટીંગ મશીનો', 'હીટ ગનો', 'ઈલેક્ટ્રિક સ્ક્રુડ્રાઇવર્સ']
            },
            doorFittings: {
              title: 'દરવાજા અને ફર્નિચર ફિટિંગ્સ',
              items: ['કીલ', 'દરવાજાના હેન્ડલ્સ અને નોબ્સ', 'ટાવર બોલ્ટ્સ', 'દરવાજાના સ્ટોપર', 'તાળા અને તાલીઓ']
            },
            safety: {
              title: 'સુરક્ષા અને ઉપયોગી ચીજવસ્તુ',
              items: ['સુરક્ષા દસ્તાનાઓ', 'સુરક્ષા ચશ્માઓ', 'હેલમેટ્સ', 'સીડીઓ']
            }
          },
          plumbing: {
            title: '🚰 પ્લમ્બિંગ અને પાઇપ ફિટિંગ્સ',
            pipes: {
              title: 'પાઇપ્સ',
              items: ['પીવીસી પાઇપ્સ', 'સીપીવીસી પાઇપ્સ', 'યુપીવીસી પાઇપ્સ', 'જીઆઇ પાઇપ્સ', 'એચડીપીઇ પાઇપ્સ', 'પીપીઆર પાઇપ્સ']
            },
            pipeFittings: {
              title: 'પાઇપ ફિટિંગ્સ',
              items: ['એલ્બો', 'ટી', 'કપલર્સ', 'રીડ્યુસર્સ', 'યુનિયન', 'એન્ડ કેપ્સ', 'ફ્લેંજ']
            },
            valvesTaps: {
              title: 'વાલ્વ અને નણ',
              items: ['બોલ વાલ્વ', 'ગેટ વાલ્વ', 'એંગલ વાલ્વ', 'બીબ કોક્સ', 'પિલર કોક્સ', 'મિક્સર ટેપ્સ']
            },
            bathroomKitchen: {
              title: 'બાથરૂમ અને રસોડું એક્સેસરીઝ',
              items: ['શાવર હેડ્સ', 'લવચક હોજ', 'સિંક કપલિંગ', 'બોટલ ટ્રેપ્સ', 'ફ્લોર ટ્રેપ્સ']
            },
            plumbingTools: {
              title: 'પ્લમ્બિંગ સાધનો અને ઉપભોગ્યવસ્તુ',
              items: ['પાઇપ રેંચ', 'પાઇપ કટર', 'ટેફલોન ટેપ', 'સોલવેન્ટ સિમેન્ટ', 'રબર ગેસ્કેટ', 'પાઇપ ક્લેમ્પ્સ']
            }
          },
          paints: {
            title: '🎨 પેઇન્ટ્સ અને પેઇન્ટિંગ સોલ્યુશન્સ',
            wallPaints: {
              title: 'દીવાલ પેઇન્ટ્સ',
              items: ['આંતરિક દીવાલ પેઇન્ટ્સ', 'બાહ્ય દીવાલ પેઇન્ટ્સ', 'ઇમલશન પેઇન્ટ્સ', 'ડિસટેમ્પર']
            },
            industrialPaints: {
              title: 'ઉદ્યોગીય અને ધાતુ પેઇન્ટ્સ',
              items: ['ઈનામેલ પેઇન્ટ્સ', 'એન્ટી-રસ્ટ પેઈન્ટ્સ', 'હીટ-રેજિસ્ટન્ટ પેઈન્ટ્સ']
            },
            surfacePrep: {
              title: 'સપાટીની તૈયારી',
              items: ['પ્રાઇમર્સ', 'દીવાલ પુટ્ટી', 'વાટરપ્રુફિંગ કોટિંગ્સ']
            },
            paintFinishes: {
              title: 'પેઇન્ટ ફિનિશ્સ',
              items: ['મેટ ફિનિશ', 'ગ્લોસ ફિનિશ', 'સાટીન ફિનિશ', 'ટેક્સચર પેઈન્ટ્સ']
            },
            paintingTools: {
              title: 'પેઇન્ટિંગ સાધનો',
              items: ['પેઇન્ટ બ્રશ', 'રોલર્સ', 'રોલર ટ્રે', 'સ્ક્રેપર્સ', 'સેન્ડપેપર']
            },
            thinnersChemicals: {
              title: 'થિનર્સ અને રસાયણો',
              items: ['પેઇન્ટ થિનર', 'ટર્પેન્ટાઇન ઓઇલ', 'પેઇન્ટ રીમૂવર્સ']
            },
            woodPolish: {
              title: 'કાઠ પોલિશ અને વર્નિશ',
              items: ['પોલિશ', 'વર્નિશ', 'સ્ટેઇન']
            }
          },
          construction: {
            title: '🧱 બાંધકામ સામગ્રી',
            cement: {
              title: 'સિમેન્ટ',
              items: ['સામાન્ય પોર્ટલેન્ડ સિમેન્ટ', 'સફેદ સિમેન્ટ']
            },
            tileMaterials: {
              title: 'ટાઇલ સામગ્રી',
              items: ['ટાઇલ ગ્લુ', 'ટાઇલ ગ્રાઉટ']
            },
            gypsum: {
              title: 'જીપ્સમ ઉત્પાદનો',
              items: ['જીપ્સમ બોર્ડ્સ', 'જોઇન્ટ કમ્પાઉન્ડ']
            },
            waterproofing: {
              title: 'વાટરપ્રુફિંગ રસાયણો',
              items: ['લિક્વિડ વાટરપ્રુફિંગ', 'વાટરપ્રુફિંગ શીટ્સ', 'સીલેન્ટ્સ']
            }
          },
          electrical: {
            title: '💡 ઈલેક્ટ્રિકલ ઉત્પાદનો',
            switches: {
              title: 'સ્વિચ અને એક્સેસરીઝ',
              items: ['સ્વિચ', 'સોકેટ', 'સ્વિચ બોર્ડ્સ']
            },
            lighting: {
              title: 'લાઇટિંગ',
              items: ['એલઈડી બલ્બ્સ', 'ટ્યુબ લાઇટ્સ', 'ફિક્સચર્સ']
            },
            wiring: {
              title: 'વાયરિંગ અને સુરક્ષા',
              items: ['વાયર અને કેબલ્સ', 'એમસીબી', 'ફ્યુઝ યુનિટ્સ', 'એક્સટેન્શન બોર્ડ્સ']
            }
          },
          adhesives: {
            title: '🧰 એધેસીવ્સ, સીલેન્ટ્સ અને વિવિધ',
            adhesivesGlues: {
              title: 'એધેસીવ્સ અને ગ્લુ',
              items: ['કાઠ એધેસીવ', 'બાંધકામ એધેસીવ', 'તાત્કાલિક એધેસીવ']
            },
            sealants: {
              title: 'સિલિકોન સીલેન્ટ્સ',
              items: ['સ્પષ્ટ સીલેન્ટ', 'રંગીન સીલેન્ટ', 'એકોસ્ટિક સીલેન્ટ']
            },
            tapes: {
              title: 'ઇન્સુલેશન અને ટેપ',
              items: ['ઇન્સુલેશન ટેપ', 'ડક્ટ ટેપ', 'ઈલેક્ટ્રિકલ ટેપ']
            },
            misc: {
              title: 'વિવિધ',
              items: ['લુબ્રિકેન્ટ્સ', 'ક્લીનિંગ બ્રશ', 'બાલ્ટી', 'દોરી અને જાળી', 'તારપોલિન શીટ્સ']
            }
          }
        },
        contactInfo: {
          title: 'વધુ માહિતી જોઈએ છે?',
          description: 'ચોક્કસ ઉત્પાદન વિવરણ, ઉપલબ્ધતા, કિંમત અને બલ્ક ઓર્ડર માટે:',
          call: 'અમને કૉલ કરો:',
          whatsapp: 'વોટ્સએપ:',
          email: 'ઇમેઇલ:',
          sendInquiry: 'પૂછપરછ મોકલો'
        }
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
        map: {
          title: 'નકશા પર અમને શોધો'
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
          messageRequired: 'કૃપા કરીને તમારી જરૂરિયાતોનું વર્ણન કરો',
          comingSoon: 'સંપર્ક ફોર્મ શીઘ્રમાં આવશે',
          comingSoonDescription: 'અમારું સંપર્ક ફોર્મ શીઘ્રમાં ઉપલબ્ધ થશે. અત્યારે, કૃપા કરીને આપણાથી સીધો સંપર્ક કરો:',
          callUs: 'અમને કૉલ કરો',
          whatsapp: 'વોટ્સએપ',
          chatWithUs: 'અમારો સંચાર કરો'
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
        highlights: {
          sizes: 'कई आकारों और ब्रांडों में उपलब्ध',
          orders: 'थोक और खुदरा आदेश स्वीकार किए जाते हैं',
          pricing: 'कीमत के लिए कॉल / व्हाट्सएप करें'
        },
        sections: {
          hardware: {
            title: '🔧 हार्डवेयर उत्पाद',
            fasteners: {
              title: 'फास्टनर',
              items: ['कीलें', 'पेंच', 'नट और बोल्ट', 'वाशर', 'एंकर फास्टनर']
            },
            handTools: {
              title: 'हाथ के उपकरण',
              items: ['हथौड़े', 'पेचकसी', 'प्लायर्स', 'स्पैनर और रेंच', 'मापने के उपकरण', 'छेनी और कटर']
            },
            powerTools: {
              title: 'पावर उपकरण',
              items: ['ड्रिल मशीनें', 'ग्राइंडर', 'कटिंग मशीनें', 'हीट गन', 'इलेक्ट्रिक पेचकसी']
            },
            doorFittings: {
              title: 'दरवाजा और फर्नीचर फिटिंग',
              items: ['कब्ज', 'दरवाजे की हैंडल और नॉब्स', 'टॉवर बोल्ट', 'दरवाजा स्टॉपर', 'ताले और पैडलॉक']
            },
            safety: {
              title: 'सुरक्षा और उपयोगी वस्तुएं',
              items: ['सुरक्षा दस्ताने', 'सुरक्षा चश्मा', 'हेलमेट', 'सीढ़ियां']
            }
          },
          plumbing: {
            title: '🚰 प्लंबिंग और पाइप फिटिंग',
            pipes: {
              title: 'पाइप',
              items: ['पीवीसी पाइप', 'सीपीवीसी पाइप', 'यूपीवीसी पाइप', 'जीआई पाइप', 'एचडीपीई पाइप', 'पीपीआर पाइप']
            },
            pipeFittings: {
              title: 'पाइप फिटिंग',
              items: ['एल्बो', 'टी', 'कपलर', 'रिड्यूसर', 'यूनियन', 'एंड कैप', 'फ्लैंज']
            },
            valvesTaps: {
              title: 'वाल्व और नल',
              items: ['बॉल वाल्व', 'गेट वाल्व', 'एंगल वाल्व', 'बीब कॉक', 'पिलर कॉक', 'मिक्सर नल']
            },
            bathroomKitchen: {
              title: 'बाथरूम और रसोई सामान',
              items: ['शावर हेड', 'लचकदार नली', 'सिंक कपलिंग', 'बोतल ट्रैप', 'फ्लोर ट्रैप']
            },
            plumbingTools: {
              title: 'प्लंबिंग उपकरण और उपभोग्य',
              items: ['पाइप रेंच', 'पाइप कटर', 'टेफ्लॉन टेप', 'सॉल्वेंट सीमेंट', 'रबर गैस्केट', 'पाइप क्लैंप']
            }
          },
          paints: {
            title: '🎨 पेंट और पेंटिंग समाधान',
            wallPaints: {
              title: 'दीवार पेंट',
              items: ['आंतरिक दीवार पेंट', 'बाहरी दीवार पेंट', 'इमल्शन पेंट', 'डिसटेम्पर']
            },
            industrialPaints: {
              title: 'औद्योगिक और धातु पेंट',
              items: ['इनेमल पेंट', 'एंटी-रस्ट पेंट', 'हीट-रेजिस्टेंट पेंट']
            },
            surfacePrep: {
              title: 'सतह की तैयारी',
              items: ['प्राइमर', 'दीवार पुट्टी', 'वाटरप्रूफिंग कोटिंग']
            },
            paintFinishes: {
              title: 'पेंट फिनिशेस',
              items: ['मैट फिनिश', 'ग्लॉस फिनिश', 'सैटिन फिनिश', 'टेक्सचर पेंट']
            },
            paintingTools: {
              title: 'पेंटिंग उपकरण',
              items: ['पेंट ब्रश', 'रोलर', 'रोलर ट्रे', 'स्क्रेपर', 'सैंडपेपर']
            },
            thinnersChemicals: {
              title: 'पतलापन और रसायन',
              items: ['पेंट थिनर', 'टर्पेन्टाइन तेल', 'पेंट रिमूवर']
            },
            woodPolish: {
              title: 'लकड़ी पॉलिश और वार्निश',
              items: ['पॉलिश', 'वार्निश', 'स्टेन']
            }
          },
          construction: {
            title: '🧱 निर्माण सामग्री',
            cement: {
              title: 'सीमेंट',
              items: ['साधारण पोर्टलैंड सीमेंट', 'सफेद सीमेंट']
            },
            tileMaterials: {
              title: 'टाइल सामग्री',
              items: ['टाइल गोंद', 'टाइल ग्राउट']
            },
            gypsum: {
              title: 'जिप्सम उत्पाद',
              items: ['जिप्सम बोर्ड', 'जॉइंट कंपाउंड']
            },
            waterproofing: {
              title: 'वाटरप्रूफिंग रसायन',
              items: ['लिक्विड वाटरप्रूफिंग', 'वाटरप्रूफिंग शीट', 'सीलेंट']
            }
          },
          electrical: {
            title: '💡 विद्युत उत्पाद',
            switches: {
              title: 'स्विच और सामान',
              items: ['स्विच', 'सॉकेट', 'स्विच बोर्ड']
            },
            lighting: {
              title: 'लाइटिंग',
              items: ['एलईडी बल्ब', 'ट्यूब लाइट', 'फिक्सचर']
            },
            wiring: {
              title: 'वायरिंग और सुरक्षा',
              items: ['तार और केबल', 'एमसीबी', 'फ्यूज यूनिट', 'एक्सटेंशन बोर्ड']
            }
          },
          adhesives: {
            title: '🧰 चिपकने वाले, सीलेंट और विविध',
            adhesivesGlues: {
              title: 'चिपकने वाले और गोंद',
              items: ['लकड़ी का गोंद', 'निर्माण गोंद', 'तत्काल गोंद']
            },
            sealants: {
              title: 'सिलिकॉन सीलेंट',
              items: ['स्पष्ट सीलेंट', 'रंगीन सीलेंट', 'ध्वनिक सीलेंट']
            },
            tapes: {
              title: 'इंसुलेशन और टेप',
              items: ['इंसुलेशन टेप', 'डक्ट टेप', 'विद्युत टेप']
            },
            misc: {
              title: 'विविध',
              items: ['लुब्रिकेंट', 'सफाई ब्रश', 'बाल्टियां', 'रस्सी और जाली', 'टारपॉलिन शीट']
            }
          }
        },
        contactInfo: {
          title: 'अधिक जानकारी चाहिए?',
          description: 'विशिष्ट उत्पाद विवरण, उपलब्धता, मूल्य और थोक ऑर्डर के लिए:',
          call: 'हमें कॉल करें:',
          whatsapp: 'व्हाट्सएप:',
          email: 'ईमेल:',
          sendInquiry: 'पूछताछ भेजें'
        }
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
        map: {
          title: 'नक्शे पर हमें खोजें'
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
          messageRequired: 'कृपया अपनी आवश्यकताओं का वर्णन करें',
          comingSoon: 'संपर्क फ़ॉर्म जल्द आ रहा है',
          comingSoonDescription: 'हमारा संपर्क फॉर्म शीघ्र ही उपलब्ध होगा। इस बीच, कृपया हमसे सीधे संपर्क करें:',
          callUs: 'हमें कॉल करें',
          whatsapp: 'व्हाट्सएप',
          chatWithUs: 'हमारे साथ चैट करें'
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
        highlights: {
          sizes: 'एकाधिक आकार आणि ब्रँड्समध्ये उपलब्ध',
          orders: 'मोठ्या प्रमाणावर आणि किरकोळ ऑर्डर स्वीकारले जातात',
          pricing: 'किंमतीसाठी कॉल / व्हाट्सअॅप करा'
        },
        sections: {
          hardware: {
            title: '🔧 हार्डवेअर उत्पादने',
            fasteners: {
              title: 'फास्टनर्स',
              items: ['खिळा', 'स्क्रू', 'नट आणि बोल्ट', 'वॉशर', 'अँकर फास्टनर्स']
            },
            handTools: {
              title: 'हाताचे साधने',
              items: ['हातोड्या', 'स्क्रूड्रायव्हर्स', 'प्लायर्स', 'स्पॅनर्स आणि रेंच', 'मोजमाप साधने', 'छेनी आणि कटर']
            },
            powerTools: {
              title: 'पावर साधने',
              items: ['ड्रिल मशीन', 'ग्राइंडर्स', 'कटिंग मशीन', 'हीट गन', 'इलेक्ट्रिक स्क्रूड्रायव्हर्स']
            },
            doorFittings: {
              title: 'दरवाजा आणि फर्निचर फिटिंग्ज',
              items: ['बिजाड़े', 'दरवाजा हँडल्स आणि नॉब्स', 'टॉवर बोल्ट्स', 'दरवाजा थांबवणारे', 'तालेबंदी आणि पॅडलॉक']
            },
            safety: {
              title: 'सुरक्षा आणि उपयोगी वस्तू',
              items: ['सुरक्षा हातमोजे', 'सुरक्षा चश्मा', 'हेलमेट', 'शिडी']
            }
          },
          plumbing: {
            title: '🚰 प्लंबिंग आणि पाईप फिटिंग्ज',
            pipes: {
              title: 'पाईप्स',
              items: ['पीव्हीसी पाईप्स', 'सीपीव्हीसी पाईप्स', 'यूपीव्हीसी पाईप्स', 'जीआय पाईप्स', 'एचडीपीई पाईप्स', 'पीपीआर पाईप्स']
            },
            pipeFittings: {
              title: 'पाईप फिटिंग्ज',
              items: ['एल्बो', 'टी', 'कपलर्स', 'रीड्यूसर्स', 'युनियन', 'एंड कॅप्स', 'फ्लँजेस']
            },
            valvesTaps: {
              title: 'वाल्व्ह आणि नळ',
              items: ['बॉल वाल्व्ह', 'गेट वाल्व्ह', 'अँगल वाल्व्ह', 'बीब कॉक्स', 'पिलर कॉक्स', 'मिक्सर नळ']
            },
            bathroomKitchen: {
              title: 'बाथरूम आणि रसोई अॅक्सेसरीज',
              items: ['शॉवर हेड्स', 'लवचिक नली', 'सिंक कपलिंग', 'बोतल ट्रॅप्स', 'फ्लोर ट्रॅप्स']
            },
            plumbingTools: {
              title: 'प्लंबिंग साधने आणि उपभोग्य',
              items: ['पाईप रेंच', 'पाईप कटर', 'टेफ्लॉन टेप', 'सॉल्व्हेंट सिमेंट', 'रबर गॅस्केट्स', 'पाईप क्लॅम्प्स']
            }
          },
          paints: {
            title: '🎨 पेंट आणि पेंटिंग सोल्यूशन्स',
            wallPaints: {
              title: 'भिंतीचे पेंट',
              items: ['आंतरिक भिंतीचे पेंट', 'बाहेरील भिंतीचे पेंट', 'इमल्शन पेंट', 'डिसटेम्परी']
            },
            industrialPaints: {
              title: 'औद्योगिक आणि धातू पेंट',
              items: ['इनामेल पेंट', 'आणि-जंग पेंट', 'उष्मा-प्रतिरोधी पेंट']
            },
            surfacePrep: {
              title: 'पृष्ठभागाची तयारी',
              items: ['प्राइमर्स', 'भिंत पुट्टी', 'जलरोधी कोटिंग्ज']
            },
            paintFinishes: {
              title: 'पेंट फिनिशेस',
              items: ['मैट फिनिश', 'ग्लॉस फिनिश', 'साटिन फिनिश', 'टेक्सचर पेंट']
            },
            paintingTools: {
              title: 'पेंटिंग साधने',
              items: ['पेंट ब्रश', 'रोलर्स', 'रोलर ट्रे', 'स्क्रेपर्स', 'सँडपेपर']
            },
            thinnersChemicals: {
              title: 'थिनर्स आणि रसायने',
              items: ['पेंट थिनर', 'टर्पेन्टाइन तेल', 'पेंट रिमूव्हर्स']
            },
            woodPolish: {
              title: 'लाकूड पॉलिश आणि वार्निश',
              items: ['पॉलिश', 'वार्निश', 'स्टेन']
            }
          },
          construction: {
            title: '🧱 बांधकाम साहित्य',
            cement: {
              title: 'सिमेंट',
              items: ['सामान्य पोर्टलँड सिमेंट', 'पांढरा सिमेंट']
            },
            tileMaterials: {
              title: 'टाइल साहित्य',
              items: ['टाइल गोंद', 'टाइल ग्राउट']
            },
            gypsum: {
              title: 'जिप्सम उत्पादने',
              items: ['जिप्सम बोर्ड्स', 'जॉइंट कंपाउंड']
            },
            waterproofing: {
              title: 'जलरोधी रसायने',
              items: ['लिक्विड जलरोधक', 'जलरोधी शीट्स', 'सीलँट्स']
            }
          },
          electrical: {
            title: '💡 विद्युत उत्पादने',
            switches: {
              title: 'स्विच आणि अॅक्सेसरीज',
              items: ['स्विच', 'सॉकेट्स', 'स्विच बोर्ड्स']
            },
            lighting: {
              title: 'प्रकाश व्यवस्था',
              items: ['एलईडी बल्ब', 'ट्यूब लाइट्स', 'फिक्सचर्स']
            },
            wiring: {
              title: 'वायरिंग आणि सुरक्षा',
              items: ['तार आणि केबल्स', 'एमसीबी', 'फ्यूज युनिट्स', 'एक्सटेन्शन बोर्ड्स']
            }
          },
          adhesives: {
            title: '🧰 अॅडहेसिव्ह्स, सीलँट्स आणि विविध',
            adhesivesGlues: {
              title: 'अॅडहेसिव्ह्स आणि गोंद',
              items: ['लाकूड गोंद', 'बांधकाम गोंद', 'तात्काळ गोंद']
            },
            sealants: {
              title: 'सिलिकॉन सीलँट्स',
              items: ['स्पष्ट सीलँट', 'रंगीन सीलँट', 'ध्वनिक सीलँट']
            },
            tapes: {
              title: 'इन्सुलेशन आणि टेप',
              items: ['इन्सुलेशन टेप', 'डक्ट टेप', 'विद्युत टेप']
            },
            misc: {
              title: 'विविध',
              items: ['स्नेहक', 'साफ करणारे ब्रश', 'बादल्या', 'दोरी आणि जाळी', 'टारपॉलिन शीट्स']
            }
          }
        },
        contactInfo: {
          title: 'आणखी माहिती हवी?',
          description: 'विशिष्ट उत्पाद तपशील, उपलब्धता, किंमत आणि मोठ्या प्रमाणातील ऑर्डरसाठी:',
          call: 'आमला कॉल करा:',
          whatsapp: 'व्हाट्सअॅप:',
          email: 'ई-मेल:',
          sendInquiry: 'विचारणा पाठवा'
        }
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
        map: {
          title: 'नकाशावर आम्हाला शोधा'
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
          messageRequired: 'कृपया तुमच्या गरजांचे वर्णन करा',
          comingSoon: 'संपर्क फॉर्म लवकरच येत आहे',
          comingSoonDescription: 'आमचा संपर्क फॉर्म लवकरच उपलब्ध होईल. तोपर्यंत, कृपया आमच्याशी थेट संपर्क साधा:',
          callUs: 'आमच्याला कॉल करा',
          whatsapp: 'व्हाट्सअॅप',
          chatWithUs: 'आमच्याशी चॅट करा'
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
        // Handle array indices
        if (Array.isArray(value) && !isNaN(Number(k))) {
          value = value[Number(k)];
        } else {
          value = value[k];
        }
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

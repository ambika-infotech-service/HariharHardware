import { Injectable } from '@angular/core';

export interface ProductItem {
  name: string;
}

export interface ProductCategory {
  id: string;
  title: string;
  icon: string;
  items: ProductItem[];
}

export interface ProductSection {
  id: string;
  title: string;
  icon: string;
  categories: ProductCategory[];
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private readonly productSections: ProductSection[] = [
    {
      id: 'hardware',
      title: '🔧 Hardware Products',
      icon: 'bi bi-wrench',
      categories: [
        {
          id: 'fasteners',
          title: 'Fasteners',
          icon: 'bi bi-bouquet',
          items: [
            { name: 'Nails' },
            { name: 'Screws' },
            { name: 'Nuts & Bolts' },
            { name: 'Washers' },
            { name: 'Anchor Fasteners' }
          ]
        },
        {
          id: 'hand-tools',
          title: 'Hand Tools',
          icon: 'bi bi-hammer',
          items: [
            { name: 'Hammers' },
            { name: 'Screwdrivers' },
            { name: 'Pliers' },
            { name: 'Spanners & Wrenches' },
            { name: 'Measuring Tools' },
            { name: 'Chisels & Cutters' }
          ]
        },
        {
          id: 'power-tools',
          title: 'Power Tools',
          icon: 'bi bi-lightning',
          items: [
            { name: 'Drill Machines' },
            { name: 'Grinders' },
            { name: 'Cutting Machines' },
            { name: 'Heat Guns' },
            { name: 'Electric Screwdrivers' }
          ]
        },
        {
          id: 'door-fittings',
          title: 'Door & Furniture Fittings',
          icon: 'bi bi-door-closed',
          items: [
            { name: 'Hinges' },
            { name: 'Door Handles & Knobs' },
            { name: 'Tower Bolts' },
            { name: 'Door Stoppers' },
            { name: 'Locks & Padlocks' }
          ]
        },
        {
          id: 'safety',
          title: 'Safety & Utility Items',
          icon: 'bi bi-shield-check',
          items: [
            { name: 'Safety Gloves' },
            { name: 'Safety Goggles' },
            { name: 'Helmets' },
            { name: 'Ladders' }
          ]
        }
      ]
    },
    {
      id: 'plumbing',
      title: '🚰 Plumbing & Pipe Fittings',
      icon: 'bi bi-water',
      categories: [
        {
          id: 'pipes',
          title: 'Pipes',
          icon: 'bi bi-pipe',
          items: [
            { name: 'PVC Pipes' },
            { name: 'CPVC Pipes' },
            { name: 'UPVC Pipes' },
            { name: 'GI Pipes' },
            { name: 'HDPE Pipes' },
            { name: 'PPR Pipes' }
          ]
        },
        {
          id: 'pipe-fittings',
          title: 'Pipe Fittings',
          icon: 'bi bi-diagram-3',
          items: [
            { name: 'Elbows' },
            { name: 'Tees' },
            { name: 'Couplers' },
            { name: 'Reducers' },
            { name: 'Unions' },
            { name: 'End Caps' },
            { name: 'Flanges' }
          ]
        },
        {
          id: 'valves-taps',
          title: 'Valves & Taps',
          icon: 'bi bi-droplet',
          items: [
            { name: 'Ball Valves' },
            { name: 'Gate Valves' },
            { name: 'Angle Valves' },
            { name: 'Bib Cocks' },
            { name: 'Pillar Cocks' },
            { name: 'Mixer Taps' }
          ]
        },
        {
          id: 'bathroom-kitchen',
          title: 'Bathroom & Kitchen Accessories',
          icon: 'bi bi-house',
          items: [
            { name: 'Shower Heads' },
            { name: 'Flexible Hoses' },
            { name: 'Sink Couplings' },
            { name: 'Bottle Traps' },
            { name: 'Floor Traps' }
          ]
        },
        {
          id: 'plumbing-tools',
          title: 'Plumbing Tools & Consumables',
          icon: 'bi bi-tools',
          items: [
            { name: 'Pipe Wrenches' },
            { name: 'Pipe Cutters' },
            { name: 'Teflon Tape' },
            { name: 'Solvent Cement' },
            { name: 'Rubber Gaskets' },
            { name: 'Pipe Clamps' }
          ]
        }
      ]
    },
    {
      id: 'paints',
      title: '🎨 Paints & Painting Solutions',
      icon: 'bi bi-palette',
      categories: [
        {
          id: 'wall-paints',
          title: 'Wall Paints',
          icon: 'bi bi-paint-bucket',
          items: [
            { name: 'Interior Wall Paints' },
            { name: 'Exterior Wall Paints' },
            { name: 'Emulsion Paints' },
            { name: 'Distemper' }
          ]
        },
        {
          id: 'industrial-paints',
          title: 'Industrial & Metal Paints',
          icon: 'bi bi-shield',
          items: [
            { name: 'Enamel Paints' },
            { name: 'Anti-Rust Paints' },
            { name: 'Heat-Resistant Paints' }
          ]
        },
        {
          id: 'surface-prep',
          title: 'Surface Preparation',
          icon: 'bi bi-brush',
          items: [
            { name: 'Primers' },
            { name: 'Wall Putty' },
            { name: 'Waterproofing Coatings' }
          ]
        },
        {
          id: 'paint-finishes',
          title: 'Paint Finishes',
          icon: 'bi bi-brightness-high',
          items: [
            { name: 'Matte Finish' },
            { name: 'Gloss Finish' },
            { name: 'Satin Finish' },
            { name: 'Texture Paints' }
          ]
        },
        {
          id: 'painting-tools',
          title: 'Painting Tools',
          icon: 'bi bi-hammer',
          items: [
            { name: 'Paint Brushes' },
            { name: 'Rollers' },
            { name: 'Roller Trays' },
            { name: 'Scrapers' },
            { name: 'Sandpaper' }
          ]
        },
        {
          id: 'thinners',
          title: 'Thinners & Chemicals',
          icon: 'bi bi-droplet',
          items: [
            { name: 'Paint Thinner' },
            { name: 'Turpentine Oil' },
            { name: 'Paint Removers' }
          ]
        },
        {
          id: 'wood-polish',
          title: 'Wood Polish & Varnish',
          icon: 'bi bi-tree',
          items: [
            { name: 'Polish' },
            { name: 'Varnish' },
            { name: 'Stain' }
          ]
        }
      ]
    },
    {
      id: 'construction',
      title: '🧱 Construction Materials',
      icon: 'bi bi-bricks',
      categories: [
        {
          id: 'cement',
          title: 'Cement',
          icon: 'bi bi-cube',
          items: [
            { name: 'Ordinary Portland Cement' },
            { name: 'White Cement' }
          ]
        },
        {
          id: 'tile-materials',
          title: 'Tile Materials',
          icon: 'bi bi-square-fill',
          items: [
            { name: 'Tile Adhesives' },
            { name: 'Tile Grout' }
          ]
        },
        {
          id: 'gypsum',
          title: 'Gypsum Products',
          icon: 'bi bi-cloud',
          items: [
            { name: 'Gypsum Boards' },
            { name: 'Joint Compound' }
          ]
        },
        {
          id: 'waterproofing',
          title: 'Waterproofing Chemicals',
          icon: 'bi bi-water',
          items: [
            { name: 'Liquid Waterproofing' },
            { name: 'Waterproofing Sheets' },
            { name: 'Sealants' }
          ]
        }
      ]
    },
    {
      id: 'electrical',
      title: '💡 Electrical Products',
      icon: 'bi bi-lightbulb',
      categories: [
        {
          id: 'switches',
          title: 'Switches & Accessories',
          icon: 'bi bi-toggle-on',
          items: [
            { name: 'Switches' },
            { name: 'Sockets' },
            { name: 'Switch Boards' }
          ]
        },
        {
          id: 'lighting',
          title: 'Lighting',
          icon: 'bi bi-lamp',
          items: [
            { name: 'LED Bulbs' },
            { name: 'Tube Lights' },
            { name: 'Fixtures' }
          ]
        },
        {
          id: 'wiring',
          title: 'Wiring & Safety',
          icon: 'bi bi-lightning',
          items: [
            { name: 'Wires & Cables' },
            { name: 'MCBs' },
            { name: 'Fuse Units' },
            { name: 'Extension Boards' }
          ]
        }
      ]
    },
    {
      id: 'adhesives',
      title: '🧰 Adhesives, Sealants & Miscellaneous',
      icon: 'bi bi-box',
      categories: [
        {
          id: 'adhesives-glues',
          title: 'Adhesives & Glues',
          icon: 'bi bi-droplet',
          items: [
            { name: 'Wood Adhesive' },
            { name: 'Construction Adhesive' },
            { name: 'Instant Adhesive' }
          ]
        },
        {
          id: 'sealants',
          title: 'Silicone Sealants',
          icon: 'bi bi-shield-check',
          items: [
            { name: 'Clear Sealant' },
            { name: 'Colored Sealant' },
            { name: 'Acoustic Sealant' }
          ]
        },
        {
          id: 'tapes',
          title: 'Insulation & Tape',
          icon: 'bi bi-tape',
          items: [
            { name: 'Insulation Tape' },
            { name: 'Duct Tape' },
            { name: 'Electrical Tape' }
          ]
        },
        {
          id: 'misc',
          title: 'Miscellaneous',
          icon: 'bi bi-box',
          items: [
            { name: 'Lubricants' },
            { name: 'Cleaning Brushes' },
            { name: 'Buckets' },
            { name: 'Rope & Net' },
            { name: 'Tarpaulin Sheets' }
          ]
        }
      ]
    }
  ];

  getProductSections(): ProductSection[] {
    return this.productSections;
  }

  getProductsByCategory(categoryId: string): ProductCategory | undefined {
    for (const section of this.productSections) {
      const category = section.categories.find(cat => cat.id === categoryId);
      if (category) {
        return category;
      }
    }
    return undefined;
  }
}

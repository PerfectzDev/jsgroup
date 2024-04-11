import{Component}from'@angular/core';
import {ImageModel}from '../../models/image.model';
import {BusinessModel}from '../../models/business.model';
import {MileStoneModel}from '../../models/milestone.model';

@Component({
selector: 'app-home',
templateUrl: './home.component.html',
styleUrls: ['./home.component.css']
})
export class HomeComponent {
title = 'jsgroupgroup';
images: ImageModel[] = [
  {imageUrl: './assets/content-highlights/1.jpg', description: 'JS LAND PLC AWARDED THE BEST AFFORDABLE CONDO DEVELOPMENT FOR THE GARDEN RESIDENCY II BY PROPERTY GURU AWARD'
  },
  {
  imageUrl:'./assets/content-highlights/2.jpg', description: 'JS PROPERTY INTERNATIONAL CELEBRATE CHIEF TOWER TOPPING OFF CEREMONY'

  },
  {
  imageUrl:'./assets/content-highlights/3.jpg',description: 'JS LAND PLC PUBLIC LISTED ON CAMBODIA SECURITIES EXCHANGE (CAMBODIA)'

  },
  {
  imageUrl:'./assets/content-highlights/4.jpg',description: 'JS LAND PLC PUBLIC LISTED ON CAMBODIA SECURITIES EXCHANGE (MALAYSIA)'

  },
  {
  imageUrl:'./assets/content-highlights/5.jpg', description: 'JS LAND PLC PUBLIC LISTED ON CAMBODIA SECURITIES EXCHANGE (HONG KONG)'

  },
  ];

  businessModels: BusinessModel[] = [
  {title: 'PROPERTY DEVELOPMENT', listOfBusinessLogoPath: ['../../../assets/business/jsgroup.png','../../../assets/business/jsproperty.png']
  },
  {title: 'MICROFINANCE', listOfBusinessLogoPath: ['../../../assets/business/jsventure.png']
  },
  {title: 'PROPERTY MANAGEMENT', listOfBusinessLogoPath: []
  },
  ];



mileStoneModels: MileStoneModel[] = [
  {mainYear: '2014', year: '2014', description: 'JS LAND was founded on 12 December 2014'
  },
  {mainYear: '2015', year: '2015', description: 'JS LAND launched its 1st project - THE GARDEN RESIDENCY '
  },
  {mainYear: '2017', year: '2017', description: 'JS PROPERTY INTERNATIONAL was awarded ASEAN MASTER CLASS PROPERTY DEVELOPMENT EXCELLENCE AWARD by AEAN RETAILS-CHAINS & 	FRANCHISE FEDERATION '
  },
  {mainYear: '2017', year: '2018', description: 'JS PROPERTY INTERNATIONAL - CHIEF TOWER was awarded BEST OFFICE ARCHITECTURAL DESIGN by PROPERTY GURU ASIA'
  },
  {mainYear: '2019', year: '2019', description: 'JS LAND first project THE GARDEN RESIDENCY was completed & handed over to buyers'
  },
  {mainYear: '2019', year: '2019', description: 'JS PROPERTY INTERNATIONAL - CHIEF TOWER was awarded BEST OFFICE DEVELOPMENT by PROPERTY GURU ASIA'
  },
  {mainYear: '2019', year: '2020', description: 'JS LAND launched  its 2nd project THE GARDEN RESIDENCY II'
  },
  {mainYear: '2019', year: '2022 ', description: 'JS LAND was successfully transform to a public limited company to JS LAND PLC and was publicly listed on CAMBODIA SECURITIES EXCHANGE'
  },
  {mainYear: '2022', year: '2022', description: 'JS LAND - THE GARDEN RESIDENCY II was successfully topping off'
  },
  {mainYear: '2022', year: '2022', description: 'JS VENTURE CO., LTD - MICROFINANCE was incorporated'
  },
  {mainYear: '2023', year: '2023', description: 'ASCENT CO., LTD - PROPERTY MANAGEMENT was incorporated'
  },
  {mainYear: '2023', year: '2023', description: 'JS LAND – THE GARDEN RESIDENCY II was awarded BEST AFFORDABLE CONDO DEVELOPMENT by PROPERTY GURU ASIA'
  },
  {mainYear: '2023', year: '2023', description: 'JS LAND - THE GARDEN RESIDENCY II was completed & handed over to buyers'
  },
  ];


latestNewsModels: ImageModel[]= [
  {
  imageUrl: 'https://www.khmertimeskh.com/501457948/csx-listed-real-estate-developer-demonstrates-momentum/?fbclid=IwAR3xpq4AUGfj5LQqLtvzuyOKLQJkWmlOiMQlKcvxjyqdSYVO94glvIcrYsw_aem_AZ5b7w6BILKMY16gBsOpc5Q3AMNlY5vKC4xP1kX0XHGyJmWVX5blujjpP3LDzxDP0CU2BHvfA-mtSoe9RWJGfwDX',
  description: 'CSX-listed Real Estate Developer Demonstrates Momentum'
  },
  {
  imageUrl:'https://www.phnompenhpost.com/business/js-land-plc-reports-strong-progress-for-q4-of-fiscal-year-23?fbclid=IwAR0RQfzgDIQrHgDy2-csZ4EO0U_0tV1fuXxPDhDFc3_F0a6PBIwnJFeI_qk_aem_AZ6x6oPJMQh8u8mfHJbhexYnbKbniGAnvbRxVfABOrU-THkfbtNi6NekKGrTcGnsA-TSLvs_a6P59VFVgoUXX7Nq',
  description: 'JS Land Plc reports strong progress for Q4 of fiscal year ‘23'
  },
  {
  imageUrl:'https://www.khmertimeskh.com/501247842/js-property-international-commemorates-milestone-topping-off-ceremony-of-chief-tower-in-phnom-penh/?fbclid=IwAR2jA8A1vNJ7weVHOfzZXqy6Iq9eUi9SkGrQVKU5XVj1eiV2_-92MI1eYRs_aem_AZ6TQpNem24AIBv0Ztv8DLEEQfl0bmDZl37JAguADVuwLury3m9Hvp6ljwj7WhqKk4UObQfxAGPH6lkfiEXdp0EE',
  description: 'JS Property International Commemorates Milestone Topping Off Ceremony of Chief Tower in Phnom Penh'
  }
  ];
}

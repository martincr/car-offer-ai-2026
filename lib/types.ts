export type Condition = 'Excellent' | 'Good' | 'Fair' | 'Needs work';

export type ExistingOfferSource = 'None' | 'Carvana' | 'CarMax' | 'Other';

export type LeadDraft = {
  vin: string;
  vehicle?: {
    year?: string;
    make?: string;
    model?: string;
    trim?: string;
  };
  confirmedVehicle?: boolean;

  contact: {
    name?: string;
    phone?: string;
    phoneVerified?: boolean;
    email?: string;
  };

  location?: {
    zip?: string;
    cityState?: string;
  };

  mileage?: string;

  title?: {
    titleInHand?: 'Yes' | 'No';
    hasLoan?: 'Yes' | 'No';
    lienholder?: string;
    payoffAmount?: string;
  };

  condition?: Condition;
  accidents?: 'Yes' | 'No' | 'Not sure';
  notes?: string;

  photos?: string[]; // data URLs for prototype
  existingOffer?: {
    source?: ExistingOfferSource;
    amount?: string;
    expires?: string;
    files?: string[]; // data URLs (pdf/image) for prototype
  };
};

export type Lead = {
  id: string;
  createdAt: string;
  data: LeadDraft;
  bids: Array<{
    id: string;
    createdAt: string;
    amount: string;
    message?: string;
    dealerName?: string;
    action: 'bid' | 'pass';
  }>;
};

export type DealerSignup = {
  id: string;
  createdAt: string;
  dealershipName: string;
  contactName: string;
  phone: string;
  email: string;
  cityState?: string;
};

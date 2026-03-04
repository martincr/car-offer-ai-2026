import { DealerSignup, Lead, LeadDraft } from "@/lib/types";

type Store = {
  leads: Map<string, Lead>;
  dealers: Map<string, DealerSignup>;
};

function getStore(): Store {
  const g = globalThis as unknown as { __carOfferStore?: Store };
  if (!g.__carOfferStore) {
    g.__carOfferStore = {
      leads: new Map(),
      dealers: new Map()
    };
  }
  return g.__carOfferStore;
}

function id(prefix: string) {
  return `${prefix}_${Math.random().toString(36).slice(2, 8)}${Date.now().toString(36).slice(4)}`;
}

export function createLead(data: LeadDraft): Lead {
  const store = getStore();
  const lead: Lead = {
    id: id("lead"),
    createdAt: new Date().toISOString(),
    data,
    bids: []
  };
  store.leads.set(lead.id, lead);
  return lead;
}

export function getLead(leadId: string) {
  return getStore().leads.get(leadId) ?? null;
}

export function listLeads() {
  return Array.from(getStore().leads.values()).sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));
}

export function addBid(leadId: string, bid: Lead["bids"][number]) {
  const store = getStore();
  const lead = store.leads.get(leadId);
  if (!lead) return null;
  lead.bids.push(bid);
  store.leads.set(leadId, lead);
  return lead;
}

export function createDealerSignup(input: Omit<DealerSignup, "id" | "createdAt">) {
  const store = getStore();
  const dealer: DealerSignup = {
    id: id("dealer"),
    createdAt: new Date().toISOString(),
    ...input
  };
  store.dealers.set(dealer.id, dealer);
  return dealer;
}

export function listDealers() {
  return Array.from(getStore().dealers.values()).sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));
}

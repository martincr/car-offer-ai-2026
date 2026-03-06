export function cleanVin(input: string) {
  return input.toUpperCase().replace(/\s+/g, '');
}

export function isValidVin(vin: string) {
  const v = cleanVin(vin);
  // VINs are typically 17 chars; exclude I, O, Q.
  return /^[A-HJ-NPR-Z0-9]{17}$/.test(v);
}

export function isProbablyPhone(input: string) {
  const digits = input.replace(/\D/g, '');
  return digits.length >= 10;
}

export function formatPhone(input: string) {
  const digits = input.replace(/\D/g, '');
  if (digits.length <= 3) return digits;
  if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6, 10)}`;
}

export function isYes(text: string) {
  return /^(y|yes|yeah|yep|correct|right|sure|ok)$/i.test(text.trim());
}

export function isNo(text: string) {
  return /^(n|no|nope|nah|incorrect|wrong)$/i.test(text.trim());
}

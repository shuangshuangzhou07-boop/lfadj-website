import { jsPDF } from "jspdf";

export type QuotePdfData = {
  product: string;
  country: string;
  economyPrice: string | number;
  standardPrice: string | number;
  premiumPrice: string | number;
};

export function generateQuotePDF(data: QuotePdfData) {
  const doc = new jsPDF();

  doc.setFontSize(16);
  doc.text("LFADJ QUOTATION", 20, 20);

  doc.setFontSize(12);
  doc.text(`Product: ${data.product}`, 20, 40);
  doc.text(`Country: ${data.country}`, 20, 50);

  doc.text(`Economy: ${data.economyPrice}`, 20, 70);
  doc.text(`Standard: ${data.standardPrice}`, 20, 80);
  doc.text(`Premium: ${data.premiumPrice}`, 20, 90);

  doc.text("CIF INCLUDED", 20, 110);

  doc.save("LFADJ_Quotation.pdf");
}

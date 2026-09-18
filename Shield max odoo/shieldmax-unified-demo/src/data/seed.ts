import { useDemoStore } from '../store/useDemoStore';
import { MOCK_PRODUCTS } from './products';
import type { RFQ, Quotation, Sale, Delivery, Invoice } from '../types';

export const seedDatabase = () => {
  const state = useDemoStore.getState();
  if (state.products.length === 0) {
    state.setProducts(MOCK_PRODUCTS);
    
    // Seed some initial RFQs
    const seedRfqs: RFQ[] = [
      {
        id: "rfq_1",
        rfqNo: "RFQ-2026-0098",
        date: "2026-09-10",
        source: "Website",
        customerInfo: {
          company: "Al Sabah Contracting W.L.L.",
          contact: "Fahad Al Sabah",
          phone: "+965 9900 1122",
          email: "purchasing@alsabah.test",
          area: "Shuwaikh",
          project: "Warehouse Expansion",
        },
        lines: [
          { productId: "p1", qty: 100, unit: "PAIR" },
          { productId: "p4", qty: 20, unit: "PCS" }
        ],
        status: "New"
      }
    ];
    useDemoStore.setState({ rfqs: seedRfqs });

    // Seed some initial quotations
    const seedQuotations: Quotation[] = [
      {
        id: "q_1",
        quotationNo: "QT-2026-0082",
        date: "2026-09-12",
        validUntil: "2026-09-22",
        source: "Manual",
        customerInfo: {
          company: "Gulf Industrial Services Co.",
          contact: "Omar Tariq",
          phone: "+965 6677 8899",
          email: "omar@gulfindustrial.test",
          area: "Mina Abdullah",
          project: "Maintenance Shutdown",
        },
        lines: [
          { productId: "p6", qty: 200, unit: "PCS", quotedUnitPrice: 1.500 },
          { productId: "p3", qty: 50, unit: "PAIR", quotedUnitPrice: 4.850 }
        ],
        subtotal: 542.500,
        status: "SENT"
      }
    ];
    useDemoStore.setState({ quotations: seedQuotations });

    // Seed some Sales
    const seedSales: Sale[] = [
      {
        id: "so_1",
        saleNo: "SO-2026-0051",
        quotationId: "q_0",
        date: "2026-09-01",
        customerName: "Kuwait Facility Solutions",
        amount: 1540.750,
        status: "Confirmed"
      }
    ];
    useDemoStore.setState({ sales: seedSales });

    // Seed Delivery
    const seedDeliveries: Delivery[] = [
      {
        id: "do_1",
        deliveryNo: "DO-2026-0046",
        saleId: "so_1",
        date: "2026-09-05",
        customerName: "Kuwait Facility Solutions",
        area: "Kuwait City",
        status: "Preparing"
      }
    ];
    useDemoStore.setState({ deliveries: seedDeliveries });

    // Seed Invoice
    const seedInvoices: Invoice[] = [
      {
        id: "inv_1",
        invoiceNo: "INV-2026-0060",
        saleId: "so_1",
        date: "2026-09-08",
        customerName: "Kuwait Facility Solutions",
        amount: 1540.750,
        balance: 1540.750,
        status: "Sent"
      }
    ];
    useDemoStore.setState({ invoices: seedInvoices });
  }
};

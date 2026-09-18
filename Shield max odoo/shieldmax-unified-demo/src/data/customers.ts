import type { Customer } from '../types';

export const MOCK_CUSTOMERS: Customer[] = [
  {
    id: "c1",
    code: "CUST-001",
    company: "Kuwait Integrated Contracting W.L.L.",
    contact: "Ahmed Al-Mutairi",
    phone: "+965 5000 2187",
    email: "procurement@example.test",
    area: "Ahmadi",
    outstanding: 12500.000,
  },
  {
    id: "c2",
    code: "CUST-002",
    company: "Al Sabah Contracting W.L.L.",
    contact: "Fahad Al Sabah",
    phone: "+965 9900 1122",
    email: "purchasing@alsabah.test",
    area: "Shuwaikh",
    outstanding: 4320.500,
  },
  {
    id: "c3",
    code: "CUST-003",
    company: "Gulf Industrial Services Co.",
    contact: "Omar Tariq",
    phone: "+965 6677 8899",
    email: "omar@gulfindustrial.test",
    area: "Mina Abdullah",
    outstanding: 0.000,
  },
  {
    id: "c4",
    code: "CUST-004",
    company: "Kuwait Facility Solutions",
    contact: "Sarah Johnson",
    phone: "+965 5544 3322",
    email: "s.johnson@kfs.test",
    area: "Kuwait City",
    outstanding: 1540.750,
  }
];

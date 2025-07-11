export const DUMMY_DEPARTMENT = [
  {
    id: "d1",
    title: "Shipping and Logistics",
    slug: "shipping-logistic",
    image: "/images/shipping.png",
    detail:
      "Handles the packing, scheduling, and delivery of goods to clients. Coordinates carriers and tracks outbound shipments.",
  },
  {
    id: "d2",
    title: "Warehouse and Inventory",
    slug: "warehouse-inventory",
    image: "/images/inventory.jpg",
    detail:
      "Manages incoming parts, storage organization, and inventory accuracy. Responsible for labeling, shelf mapping, and physical stock control.",
  },
  {
    id: "d3",
    title: "Customer Service",
    slug: "customer-service",
    image: "/images/customer-service.jpg",
    detail:
      "Supports client communication and inquiries, including tracking issues, part availability, and post-delivery concerns.",
  },
  {
    id: "d4",
    title: "Sales",
    slug: "sales",
    image: "/images/sales.png",
    detail:
      "Handles quoting, pricing, and order placement for automotive clients. Works closely with supply chain and production to meet client needs.",
  },
  {
    id: "d5",
    title: "Finance",
    slug: "finance",
    image: "/images/finance.jpg",
    detail:
      "Manages invoicing, payments, cost tracking, and financial reporting. Supports both internal and client-facing financial processes.",
  },
  {
    id: "d6",
    title: "Supply Chain",
    slug: "supply-chain",
    image: "/images/supply-chain.jpg",
    detail:
      "Coordinates part purchasing, vendor relationships, and shortage management. Supports inventory planning and fulfillment.",
  },
  {
    id: "d7",
    title: "Assembly and Production",
    slug: "assembly-production",
    image: "/images/assembly.jpg",
    detail:
      "Performs cable assembly, light manufacturing, and PCB-related work. Converts parts into client-ready components or kits.",
  },
  {
    id: "d8",
    title: "Quality Control",
    slug: "quality-control",
    image: "/images/quality-control.jpg",
    detail:
      "Inspects incoming and assembled parts for defects or quality issues. Ensures SOP compliance and customer standards are met.",
  },
  {
    id: "d9",
    title: "IT System",
    slug: "it-system",
    image: "/images/IT-system.jpg",
    detail:
      "Maintains software systems, inventory tools, and label printing setups. Supports digital infrastructure for all departments.",
  },
];

export const DUMMY_SOP = [
  {
    depId: "d1",
    id: "s1",
    title: "Enter Open Order",
    slug: "Enter-Open-Order",
    detail:
      "Log new customer orders into the system, including item details, quantities, customer information, and expected ship date.",
    sop: [
      {
        id: "p1",
        text: "Step 1: \nDownload all P.O as PDF files from Outlook and save to Desktop > pdf_to_excel1.1 > open_order_pdf. \nNote: ONLY download the needed page(s)"
      },
      {
        id: "p2",
        text: "Step 2: \nPrint all P.O in the folder “open_order_pdf“."
      },
      {
        id: "p3",
        text: "Step 3: \nDouble-check the printed P.O with Outlook and highlight P.O#, revise, and INCO terms."
      },
      {
        id: "p4",
        text: "Step 4: \nDrag all new P.O emails to “Printed” folder."
      },
      {
        id: "p5",
        text: "Step 5: \nGo to the “pdf_to_excel1.1“ folder on the Desktop  and run “pdf_to_excel.exe”"
      },
      {
        id: "p6",
        text: "Step 6: \nAfter finishing the run (as shown in the image below), press “Y” or click the close button at the top right to close the program."
      },
      {
        id: "p7",
        text: "Step 7: \nOpen “daily_open_order.csv”"
      },
      {
        id: "p8",
        text: "Step 8: \nDouble-check the P.O.#, part #, qty, and date with the hard copies. Write “e“ on the checked paper."
      },
      {
        id: "p9",
        text: "Step 9: \nCopy and paste by value to the “Open order Report 2023” and save.\nNote: To paste by value, right-click on the selected cell, choose Paste Special, choose value, and click OK."
      },
      {
        id: "p10",
        text: "Step 10: \nDelete all PDF files in the folder “open_order_pdf“."
      },
    ],
  },
  {
    depId: "d1",
    id: "s2",
    title: "Create Packing Slip",
    slug: "Create-Packing-Slip",
    detail:
      "Generate a packing slip for the order using the Quickbook system. Ensure all product SKUs, descriptions, and quantities match the open order before printing.",
    sop: [],
  },
  {
    depId: "d1",
    id: "s3",
    title: "Pack Items",
    slug: "Pack-Items",
    detail:
      "Pick items from inventory and pack them securely for shipment. Cross-check each item against the packing slip to ensure accuracy before sealing the box.",
    sop: [],
  },
  {
    depId: "d2",
    id: "s4",
    title: "Receive Item",
    slug: "Receive-Item",
    detail:
      "Inspect incoming shipments, check for damage, and verify quantities against the purchase order. Update inventory records and label items as needed.",
    sop: [],
  },
  {
    depId: "d3",
    id: "s5",
    title: "Email Customer After Shipping",
    slug: "Email-Customer-After-Shipping",
    detail:
      "Send a shipping confirmation email to the customer including the tracking number, carrier information, and estimated delivery date. Confirm any additional instructions if required.",
    sop: [],
  },
];
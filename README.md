# AgroZyro

> **EVERY HARVEST. ONE MARKET.**

AgroZyro is a modern agricultural marketplace designed to connect
farmers, buyers, sellers, traders, and agricultural businesses through a
single digital platform.

The long-term vision is to build a trusted, scalable marketplace for
agricultural commodities and related products --- from grains and
oilseeds to fruits, vegetables, poultry, eggs, and animal feed.

**AgroZyro**\

------------------------------------------------------------------------

## 🌾 Vision

Build a modern digital marketplace where agricultural products can be
discovered, compared, traded, ordered, and tracked through a simple and
trustworthy experience.

AgroZyro aims to bring together:

-   Farmers
-   Buyers
-   Sellers
-   Traders
-   Agricultural businesses
-   Poultry businesses
-   Future logistics and service partners

------------------------------------------------------------------------

## 🚀 Planned Features

### Marketplace

-   Browse agricultural products
-   Search products and categories
-   Filter by category and location
-   Product details
-   Seller information
-   Availability and quantity
-   Buyer/seller interaction

### Market Rates

-   Commodity-wise market rates
-   Location-wise rates
-   Rate history
-   Price movement
-   Effective date/time
-   Future integration with reliable market-rate sources

### Buyer

-   Registration and login
-   Buyer dashboard
-   Browse products
-   Select quantity in KG or Quintal
-   Add delivery/pickup details
-   Place orders
-   Online payment
-   Order tracking
-   Order history
-   Invoices

### Seller

-   Seller registration/login
-   Seller dashboard
-   Product management
-   Inventory management
-   Selling rates
-   Incoming orders
-   Order status updates
-   Payment status
-   Sales reports

### Orders

Planned order lifecycle:

`PENDING → PAYMENT_PENDING → PAID → CONFIRMED → PROCESSING → READY → DISPATCHED → DELIVERED`

Possible terminal states:

`CANCELLED` / `REFUNDED`

### Payments

-   Online payments
-   Payment verification
-   Transaction records
-   Payment status
-   Refund handling

A suitable Indian payment gateway such as Razorpay will be evaluated
during implementation.

------------------------------------------------------------------------

## 🧺 Initial Product Categories

### Oilseeds

-   Mustard
-   Soybean

### Grains

-   Wheat
-   Rice
-   Maize
-   Chana

### Poultry

-   Chicken
-   Eggs

### Future Categories

-   Pulses
-   Spices
-   Fruits
-   Vegetables
-   Animal Feed
-   Livestock
-   Other agricultural products

The product catalogue will be designed to support adding new commodities
without restructuring the application.

------------------------------------------------------------------------

## 🛠️ Tech Stack

### Frontend

-   Next.js
-   React
-   TypeScript
-   Tailwind CSS

### Backend

-   Next.js server-side functionality / API layer
-   PostgreSQL
-   Prisma ORM

### Authentication

-   Auth.js

### Payments

-   Indian payment gateway integration (planned)

### Deployment

-   Vercel / suitable production infrastructure

### Development

-   Git
-   GitHub
-   VS Code
-   npm

------------------------------------------------------------------------

## 🏗️ Planned Architecture

``` text
AgroZyro
│
├── Public Website
│   ├── Home
│   ├── Marketplace
│   ├── Market Rates
│   ├── Categories
│   ├── How It Works
│   └── About
│
├── Authentication
│   ├── Register
│   ├── Login
│   └── Account
│
├── Buyer
│   ├── Dashboard
│   ├── Marketplace
│   ├── Cart / Orders
│   ├── Payments
│   └── Order Tracking
│
├── Seller
│   ├── Dashboard
│   ├── Products
│   ├── Inventory
│   ├── Orders
│   ├── Rates
│   └── Reports
│
└── Admin
    ├── Users
    ├── Products
    ├── Categories
    ├── Orders
    ├── Payments
    └── Platform Management
```

------------------------------------------------------------------------

## 🗄️ Planned Database

The initial database model is expected to contain entities such as:

``` text
User
Category
Product
ProductRate
Inventory
Order
OrderItem
Payment
Address
```

### Important pricing rule

Historical orders must retain the price at which the order was placed.

Therefore, `OrderItem` will store a price snapshot such as:

``` text
rateAtOrder
```

Changing the current product rate must never change the price of an
existing order.

------------------------------------------------------------------------

## 📏 Quantity Units

AgroZyro will initially support:

-   KG
-   Quintal

Conversion:

``` text
1 Quintal = 100 KG
```

The unit will be stored explicitly with product/order data to avoid
ambiguity.

------------------------------------------------------------------------

## 🎨 Design Direction

AgroZyro will use a premium, modern agricultural visual identity.

### Design principles

-   Clean
-   Premium
-   Trustworthy
-   Modern Indian agricultural identity
-   Generous whitespace
-   Strong typography
-   Deep agricultural greens
-   Off-white backgrounds
-   Charcoal text
-   Subtle earth-tone accents
-   Thin borders
-   Soft shadows
-   Minimal animations
-   Responsive design

The website should feel like a serious commercial marketplace rather
than:

-   A generic SaaS template
-   A government portal
-   An outdated agricultural website
-   An overly colorful dashboard

------------------------------------------------------------------------

## 🏠 Homepage

The initial homepage will contain:

1.  Navbar
2.  Hero section
3.  Market snapshot
4.  Agricultural categories
5.  Market rates
6.  How AgroZyro Works
7.  Agricultural ecosystem section
8.  Mobile app promotion
9.  Testimonials
10. Final CTA
11. Footer

### Hero

**From Farms to Opportunities**

> Discover market rates, connect with trusted buyers and sellers, and
> grow your business with AgroZyro --- every harvest finds its market.

Primary actions:

-   Explore Marketplace
-   Sell With Us

------------------------------------------------------------------------

## 🔐 Security

Security is an important part of AgroZyro's architecture.

Planned security practices include:

-   Secure password hashing
-   Authentication and authorization
-   Role-based access control
-   Input validation
-   Server-side validation
-   Secure payment verification
-   Environment-variable based secrets
-   Database access controls
-   Protection against common web vulnerabilities
-   Audit-friendly order/payment records

------------------------------------------------------------------------

## 📱 Responsive Design

The application will be designed for:

-   Desktop
-   Laptop
-   Tablet
-   Mobile

The mobile experience will not simply be a compressed desktop layout.
Important marketplace and ordering flows will be designed specifically
for smaller screens.

------------------------------------------------------------------------

## 🗺️ Development Roadmap

### Phase 1 --- Foundation

-   [ ] Create repository
-   [ ] Initialize Next.js
-   [ ] Configure TypeScript
-   [ ] Configure Tailwind CSS
-   [ ] Establish project structure
-   [ ] Create design system
-   [ ] Add AgroZyro branding

### Phase 2 --- Public Website

-   [ ] Navbar
-   [ ] Hero
-   [ ] Categories
-   [ ] Market Rates
-   [ ] How It Works
-   [ ] Ecosystem section
-   [ ] App promotion
-   [ ] Testimonials
-   [ ] CTA
-   [ ] Footer
-   [ ] Responsive layouts
-   [ ] Dark/light mode

### Phase 3 --- Authentication

-   [ ] Registration
-   [ ] Login
-   [ ] Logout
-   [ ] Session management
-   [ ] Role-based access

### Phase 4 --- Database

-   [ ] PostgreSQL
-   [ ] Prisma
-   [ ] Database schema
-   [ ] Migrations
-   [ ] Seed data

### Phase 5 --- Marketplace

-   [ ] Product catalogue
-   [ ] Categories
-   [ ] Search
-   [ ] Filters
-   [ ] Product details
-   [ ] Seller information
-   [ ] Inventory

### Phase 6 --- Buyer System

-   [ ] Buyer dashboard
-   [ ] Cart
-   [ ] Quantity selection
-   [ ] Address management
-   [ ] Order creation
-   [ ] Order history
-   [ ] Tracking

### Phase 7 --- Seller System

-   [ ] Seller dashboard
-   [ ] Product management
-   [ ] Inventory
-   [ ] Selling rates
-   [ ] Order management
-   [ ] Reports

### Phase 8 --- Payments

-   [ ] Payment gateway
-   [ ] Payment verification
-   [ ] Payment status
-   [ ] Refund flow
-   [ ] Invoice generation

### Phase 9 --- Admin

-   [ ] Admin dashboard
-   [ ] User management
-   [ ] Product management
-   [ ] Category management
-   [ ] Order management
-   [ ] Payment management
-   [ ] Platform analytics

### Phase 10 --- Production

-   [ ] Security review
-   [ ] Performance optimization
-   [ ] SEO
-   [ ] Error monitoring
-   [ ] Production deployment
-   [ ] Domain setup
-   [ ] Backup strategy

------------------------------------------------------------------------

## 📂 Initial Project Structure

The exact structure may evolve as the application grows.

``` text
agrozyro/
│
├── app/
│   ├── page.tsx
│   ├── layout.tsx
│   └── globals.css
│
├── components/
│   ├── navbar/
│   ├── home/
│   └── ui/
│
├── lib/
│   ├── db/
│   ├── auth/
│   └── utils/
│
├── prisma/
│   └── schema.prisma
│
├── public/
│   ├── images/
│   └── icons/
│
├── types/
│
├── .env.example
├── .gitignore
├── package.json
├── tsconfig.json
├── next.config.ts
└── README.md
```

------------------------------------------------------------------------

## ⚙️ Local Development

Clone the repository:

``` bash
git clone <repository-url>
cd agrozyro
```

Install dependencies:

``` bash
npm install
```

Run the development server:

``` bash
npm run dev
```

Open:

``` text
http://localhost:3000
```

------------------------------------------------------------------------

## 🔑 Environment Variables

Secrets should never be committed to Git.

A future `.env.example` will contain variables such as:

``` env
DATABASE_URL=

AUTH_SECRET=

RAZORPAY_KEY_ID=
RAZORPAY_KEY_SECRET=
```

Actual values must remain in `.env.local` or the deployment platform's
secret/environment-variable manager.

------------------------------------------------------------------------

## 📌 Development Principles

### 1. Build real features, not fake demos

UI mock data may be used during the design phase, but production
features should eventually connect to the database and real services.

### 2. Keep business logic separate

Pricing, inventory, orders, payments, and authentication should not be
tightly coupled to individual UI components.

### 3. Preserve historical order data

Existing orders must remain unchanged even when current product rates or
inventory change.

### 4. Design for scale

The system should be able to add commodities, sellers, locations, users,
and services without major architectural rewrites.

### 5. Security first

Authentication, authorization, validation, payment verification, and
secret management must be considered from the beginning.

### 6. Mobile matters

Agricultural users may access the platform primarily through mobile
devices, so mobile usability is a first-class requirement.

------------------------------------------------------------------------

## 🌱 Long-Term Vision

AgroZyro is planned as more than a simple agricultural product listing
website.

The long-term platform may expand into:

-   Agricultural commerce
-   Market intelligence
-   Commodity price tracking
-   Buyer-seller discovery
-   Digital ordering
-   Payments
-   Logistics
-   Inventory management
-   Business analytics
-   Agricultural services
-   Mobile applications

The architecture will therefore be designed with future expansion in
mind while keeping the initial product simple enough to build and
validate.

------------------------------------------------------------------------

## 📄 Project Status

**Status:** 🚧 Early Development

AgroZyro is currently being built from the ground up.

Features described as planned are not necessarily implemented yet.

------------------------------------------------------------------------

## 📜 License

License and commercial usage terms will be defined before public
production release.

------------------------------------------------------------------------

## 👨‍💻 Project

**AgroZyro**\
*EVERY HARVEST. ONE MARKET.*


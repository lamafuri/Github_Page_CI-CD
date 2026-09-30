import { render, screen } from "@testing-library/react";
import HomePage from "../app/page";

const categoryNames = ["Smartphones", "Laptops", "Headphones", "Smart Home"];
const features = [
  "Free shipping over $99",
  "1-year warranty on major products",
  "24/7 customer support",
  "Secure payment checkout",
];

describe("HomePage", () => {
  it("renders the site logo/brand", () => {
    render(<HomePage />);
    const logos = screen.getAllByText("myshop");
    expect(logos.length).toBeGreaterThan(0);
  });

  it("renders the contact email in the footer", () => {
    render(<HomePage />);
    expect(screen.getByText(/contact@info.info.np/i)).toBeInTheDocument();
  });

  it("renders the correct phone number in the footer", () => {
    render(<HomePage />);
    expect(screen.getByText(/\+1 \(800\) 555-0199/)).toBeInTheDocument();
  });

  it("renders the current year in the footer copyright", () => {
    render(<HomePage />);
    const year = new Date().getFullYear().toString();
    expect(screen.getByText(new RegExp(`© ${year} myshop`))).toBeInTheDocument();
  });

  describe("Categories section", () => {
    it.each(categoryNames)("renders the %s category name", (name) => {
      render(<HomePage />);
      expect(screen.getByRole("heading", { level: 3, name })).toBeInTheDocument();
    });

    it("renders an image with proper alt text for every category", () => {
      render(<HomePage />);
      categoryNames.forEach((name) => {
        const img = screen.getByAltText(name);
        expect(img).toBeInTheDocument();
      });
    });
  });

  describe("Features list", () => {
    it.each(features)('renders the feature "%s"', (feature) => {
      render(<HomePage />);
      expect(screen.getByText(feature)).toBeInTheDocument();
    });
  });

  describe("Nav links", () => {
    it("has a Categories link pointing to #categories", () => {
      render(<HomePage />);
      expect(screen.getByRole("link", { name: "Categories" })).toHaveAttribute("href", "#categories");
    });

    it("has a Deals link pointing to #deals", () => {
      render(<HomePage />);
      expect(screen.getByRole("link", { name: "Deals" })).toHaveAttribute("href", "#deals");
    });

    it("has a Contact link pointing to #contact", () => {
      render(<HomePage />);
      expect(screen.getByRole("link", { name: "Contact" })).toHaveAttribute("href", "#contact");
    });
  });

  describe("Accessibility - image alt text", () => {
    it("has no image with missing or empty alt text", () => {
      render(<HomePage />);
      const images = screen.getAllByRole("img");
      expect(images.length).toBeGreaterThan(0);
      images.forEach((img) => {
        const alt = img.getAttribute("alt");
        expect(alt).toBeTruthy();
        expect(alt.trim().length).toBeGreaterThan(0);
      });
    });
  });
});

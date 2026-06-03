import React from "react";
import { render, screen } from "@testing-library/react";    
import "@testing-library/jest-dom/extend-expect";
import Hero from "../src/components/Hero";


describe("Hero component", () => {
  test("renders the hero image", () => {
    render(<Hero />);
    const heroImage = screen.getByAltText("hero-image");
    expect(heroImage).toBeInTheDocument();
    expect(heroImage).toHaveAttribute("src", "./media/HomeHero.png");
  }); 

test("renders signup button", () => {
  render(<Hero />);
  const signupButton = screen.getByRole("button", { name: /signup now/i });
  expect(signupButton).toBeInTheDocument();
  expect(signupButton).toHaveClass("btn-primary");
});
});
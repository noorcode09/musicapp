"use client"
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../components/ui/navbar-menu";
import { cn } from "../lib/utils";
import Link from "next/link";



function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
    className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
          <MenuItem active={active} setActive={setActive} item="Home">
            <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/web-dev">Web Development</HoveredLink>
                <HoveredLink href="/web-dev">Web Development</HoveredLink>
                <HoveredLink href="/web-dev">Web Development</HoveredLink>
                <HoveredLink href="/web-dev">Web Development</HoveredLink>
            </div>
          </MenuItem>
          
          <MenuItem active={active} setActive={setActive} item="Our Courses">
            <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/web-dev">Web Development</HoveredLink>
                <HoveredLink href="/web-dev">Web Development</HoveredLink>
                <HoveredLink href="/web-dev">Web Development</HoveredLink>
                <HoveredLink href="/web-dev">Web Development</HoveredLink>
            </div>
          </MenuItem>
          <MenuItem active={active} setActive={setActive} item="Contact Us">
            <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/web-dev">Web Development</HoveredLink>
                <HoveredLink href="/web-dev">Web Development</HoveredLink>
                <HoveredLink href="/web-dev">Web Development</HoveredLink>
                <HoveredLink href="/web-dev">Web Development</HoveredLink>
            </div>
          </MenuItem>
      </Menu>
    </div>
  )
}

export default Navbar
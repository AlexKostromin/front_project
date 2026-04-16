"use client";

import { MenuOutlined } from "@ant-design/icons";
import { Button, Drawer, Flex, Grid, Space } from "antd";
import Link from "next/link";
import { useState } from "react";
import { primaryNav } from "@/shared/config/site";
import { Container } from "@/shared/ui";
import { useContactModal } from "@/features/contact";
import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";

const { useBreakpoint } = Grid;

export function Header() {
  const screens = useBreakpoint();
  const isDesktop = screens.md;
  const [open, setOpen] = useState(false);
  const openContact = useContactModal((s) => s.openModal);

  const navLinks = primaryNav.map((link) => (
    <Link
      key={link.href}
      href={link.href}
      onClick={() => setOpen(false)}
      className="nav-link"
      style={{
        color: "inherit",
        textDecoration: "none",
        fontSize: 14,
        opacity: 0.8,
      }}
    >
      {link.label}
    </Link>
  ));

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        backdropFilter: "saturate(1.2) blur(12px)",
        WebkitBackdropFilter: "saturate(1.2) blur(12px)",
        background: "color-mix(in oklab, var(--bg) 80%, transparent)",
        borderBottom: "1px solid var(--border, rgba(0,0,0,0.06))",
      }}
    >
      <Container>
        <Flex align="center" justify="space-between" style={{ height: 72 }}>
          <Logo />

          {isDesktop && (
            <nav aria-label="Основная навигация">
              <Space size={32}>{navLinks}</Space>
            </nav>
          )}

          <Space size={8}>
            <ThemeToggle />
            {isDesktop ? (
              <>
                <Button type="text" href="#login">
                  Войти
                </Button>
                <Button type="primary" onClick={openContact}>
                  Связаться
                </Button>
              </>
            ) : (
              <Button
                type="text"
                shape="circle"
                icon={<MenuOutlined />}
                aria-label="Открыть меню"
                onClick={() => setOpen(true)}
              />
            )}
          </Space>
        </Flex>
      </Container>

      <Drawer title="Меню" placement="right" onClose={() => setOpen(false)} open={open} size={320}>
        <Flex vertical gap={20}>
          {navLinks}
          <Button
            block
            type="primary"
            onClick={() => {
              setOpen(false);
              openContact();
            }}
          >
            Связаться
          </Button>
          <Button block type="default" href="#login" onClick={() => setOpen(false)}>
            Войти
          </Button>
        </Flex>
      </Drawer>
    </header>
  );
}

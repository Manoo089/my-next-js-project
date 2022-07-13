import PropTypes from "prop-types";
import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const NavigationButton = ({ href, label }) => {
  const router = useRouter();

  const isActive = router.pathname === href ? "NavigationButton--active" : "";

  return (
    <div className={["NavigationButton", [isActive]].join(" ")}>
      <Link href={`${href}`}>
        <a className="NavigationButton__alink">{label}</a>
      </Link>
    </div>
  );
};

NavigationButton.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string,
  label: PropTypes.string,
};

export default NavigationButton;

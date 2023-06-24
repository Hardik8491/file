"use client";

import { log } from "console";
import React from "react";

import { useState, useEffect } from "react";
import { global } from "styled-jsx/css";
const Navbar = () => {
  const [scrolled,setScrolled]=useState(false);

  const handleScroll=()=>{
  }
  useEffect(()=>{
    window.addEventListener("scroll",handleScroll);

  },[scrolled]);
console.log("hellow world")

  

  return (
  <header className={`main ${scrolled ? `sticky-header`:''}`}>
    <nav className="z-[9999] hidden lg:block stickyHeader  " id="header">
      <div className="topbar fixed md:top-[1.875rem] lg:top-[4rem] xl:top-[1.25rem]  left-0 w-full z-[999]">
        <div className="container mx-auto sm:container lg:container xl:container 2x:container">
          <div className="flex items-center justify-between w-full topbarInner ">
            <div className="logo inline-block max-w-[50%]">
              <a title="HDKSTAR" href="/">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANsAAAAoCAYAAAB3hY/3AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA25pVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/
                  eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ4IDc5Lj
                  E2NDAzNiwgMjAxOS8wOC8xMy0wMTowNjo1NyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6
                  YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bX
                  A9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo3MUE3QTZCODQzNkRFQzExQUU1QzhBQUQyNEFDMTY4MyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZ
                  Do2QjJENThCOTFFMDQxMUVEQkVDRjhENTBBRUUxMjNFMyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo2QjJENThCODFFMDQxMUVEQkVDRjhENTBBRUUxMjNFMyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3A
                  gQ0MgMjAxNyAoV2luZG93cykiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3YjEyMjRlZC0yNTAyLWZmNDEtOTcwYi02NmVkODE2NzU1NmYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC
                  5kaWQ6NzFBN0E2Qjg0MzZERUMxMUFFNUM4QUFEMjRBQzE2ODMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5i8aQsAAALIUlEQVR42uxdCYxkRRmu2U
                  VZ0A02DodhOTIDu0aUBQcBMUGOWeSUw/QkggLL0ROIoERgBlQCSGA6GAiHkOkg2V3AhZkAUZAFpnEXucl2uIUFu4ksiS4IzSpyCLvj/03/j615W/Ve1bu6yas/+dL9zqp6r776j6pX1TX3kL+JiLIDYT/CboQ9CDsRvkzYhPA
                  BYQ2hTniasZzwnogumxL2J3yT0EfoJWxD+CJhHeEdwmrCM4RnCQ8TQgu3almvcOIkC9nE8vzPEU4gHE/4LmGG5rzZhK0J3yAczfveJtxHuIV/TQWE/jHhCMK2Aed9idDD+fLkccLvCYsJ/3Gv20k7ZYbFuT9lTXUj4QDLawVr
                  PZB0GWudww1IBlI+RDg1hGg6+TbhWsJrhF9GyLMTJ4lJl4EZuS/hOjYVZfmEcC/hMTYT17D2gEn3edY02xG+RTiQsI/i3tA6Z7IJKGvPqwmnK85HOg8SniS8TlhL+JBJBHNyK8J8JhnIvLnv+jqnt8yZkU46jWyomNf49kFL3EB
                  YSnjDIq3dWUOdxmT05C3CMYRHCfMI9xB29l27iFBhs9BUQLwi4QzCrr5jvyZc6MjmpFPMyGt9RPuIMETYhXCFJdEEBy5+wkRa7CPFI4RLCE/4iHYX4WuEhZZE80h8PeHrrCVl7fkrwm3u9TvpBM12JeFsaftFwpGs1ZKS7xPuJMz
                  UHF/IGi0p6Sbcwb6gJ0tJsx3nqoGTdmm2n/mIBr9st4SJBvkjm5b/8O3/HwdgFiWc3r9EK1Ipa9Ufzju0foWrBk7aQTb0YV0lbT/AgYb1KaX/Agc0VvP2+4Q9CStSLPNJhJul7XOIcIe7quAkazMSfth2/P9pJl8Wsj37bWcR/
                  pBRmvcTDub/6ITfgkzKjy2uL4hW57qtNLq6uhpZvuTJyUnks9+fD0KV8tLUXNMfM9nQclIaBc5Xj+9Qja6tWpStECHtjcpnmmZUkTu1fyERDfK9DOsDNNtXudJnJYcRUNHQAb+ZaEVYT7W4Hi95IkK6w4RySEUYE61Iql8qVCEGLUiG
                  gFZJUZnlcxDlLSsq50TM56stJxOkxNDlq8nXV3QNAsuIoiGpsYUUJKrydRmSe6XmcG8QyT0zEhXuUmn/uaIVzctSPsg4vXU+cp1C5uT27TY1uLUvag4X+bjJfUa5IvaEnIoKv5IrURblG+HKWjKwHHBuna4pWibTxw1NGlKMeOxTsp0h7U
                  PA4jc5MaOhQZ6Vts/rgDyVQipg0aBCDxlUZv99J0yJHINoaABsSYA8jdG1JcvrRlJqQEoRj31qRi6U9l2SM7/1fNGKuEIwnOzMmPcLs/ubMVpOwSZTJUQzDmnSrfCvyrT0rhsOKEeP4romm22B5WSilWI811GYlmSmjdtcY2BO2jQWRYV/OO35gOC
                  Ux5ouQDKXflfxNgIEGGb1fl6YhhEkZD7CZO7mXfvTvocMLu1X2f30oLtivExU5LrBqVrfgB1/lT8y4FVUJuRKFXHonC1DNOaIv3GhaxYYVNIxzeEKk7Uh+cI6P7PJZW9K955Q+GzTfEc6v6zI06TtuzNsMLR+NczIg6TtP+WJaJIslf4f2GEmZDOC9g
                  vUqFxZy6y9ZNRSKteIJj8LUDEJqKBVBoI1vRrtXYigHUe4EUvCly7FeTcgmxzef0DkU/4i/d+njflQvahBW99AFzTwteKo4Av8SMFP69NoqeGgUDtrB5XJGCXwMZrSuxlX5LGg8y9BtvnS9hs5Jdtq6f9O7cgAm1r+SjnOpl9D5RtobtUIaOHHEug/sxVVeugHqxhcO6zSbhHK0J9AdLKkMYGrhmWeItscaXtNTsmGRma9Z
                  KrEIc2QBv0RKmVVakGNtBv7cuMBrTOijnXOU0+byGYU5OCy1MK0tGGQKnJ5+bo+RYNR05SlqEoLZJstbf87p2RbK/mqmyXgn6jQZ+kPyJVy3NJvGwzxv3rEhj6sdmi7ZkrnymQrK/y9qOak9t2w/2v0fkA2OQIzKfIr7Sy70h/wom7cgjYU5lRRoxGmgg+GGsTTdkMZlreWQRplxTOLak4WQ7Rz1ZRs8twcs3NKNHzl/QX+/2G
                  HkK2q8A+MtRsIRxgQrYmRKgYaYiRDwqU+WoUbnMG45iRr/R6NCemlpXq+fX6/GmSTP3HZJqdkmyM2jKZZG/NewxrUAvwBE79G5xsUwvweDq+j/2wgRNsNpTCKpKkxY+MQs2lIuKqikfKGgSWl1YSpqY8RJM+JDfOLfCXHZPPk9ZgtajkBrYbKNKbod9X5E2XDvE2FqpngY4qK7A0HqyT4bGuKMqKRGA4ZYCw4hF4wDIAENX7+kR9G/ZQ
                  B41T7uTM9rAEpCSmiCrLhU5oTeRsdujfmkGz7Sv+fzDhtlfNdEMGjIvxkLfs0pc4HbHjajs6Dlqtr0k5SxhWaxNMugyEVXWXW1mw+UQKh6V6DQj+CJezZFmKYwVN+tTdyB2RbLh08SrRmt/o4Z2STp0ZYkVlERt/ha+X/gGBSBdSZSU1ZYzHhUi8jp1NRNColTn8jDcd+ku6LhUqEPECbjwv7kTdJRGn7PRNzBpuRf+cDm7NdnxuZd2gdc5J43/H919JESUOrxboPO+5NTQCkT6rQumBIGh+2ljV5Qr7fgUnG/X4YbIwxmxMa7VE17AxXyaCw6EYIsBCs343nB3uj/peI1oxTkIsJt+aIb5fJJs+qZb3rMky7qPExaiEt5ZDiPsO+yq0y3fDdWo3/6wb6Jt7YsHZD/kYDyhSmRZpBZmcK5mRR0xCF5WFMYXpO+cEe2a6RyIZQ8cmEm3JANPRFfUfavjxDE1Ll/DfDAix0XUNBth7ZN8A9uA+uz9LfCA1axKjsFTYbo3Qse4OWGzHzYGNOKodnhU2dwPcvKe5V8cLdmHnqSukg5luclXHFn9UGsi2R/t9JWu2VDNOONIwpYAhTv6Ihsfn2aziGiWZMOM6XDWlQhl7dN2JpmJMBvrTJ86zq/Gp5dq2fiw19TFgx5t4MKx4mZv2raE2Zl5Vg6nN5/YCTM9RqupBy1aICbmT2yH1kUqf2AqHv1PaCJntG6LKISrgqf0IzGFB5vXxBmw0kqW0DOrvDTEijKChbF8pPb/yzax3ke+Hw3X6U8vOfyUEazHyMgdDzRfoDojFX5DnS9omk1ZZYvrTPnM3MTr/XYmc+y5dhvmppmbLtFtWMyAgYnC9tLxLTp01IUqBZ7hPTP/P5p2hN0vpySmmiBZfnGllMRDtJOHGSsqhmRL5ATI9GoiJi5ZgtEk57b8LzPqJ5BMQkPAenoEHHfER70BHNSTvJJth0lO1pjCx5SbQWQowr6MtD1A+LaHRL+2Gje2F3rHJzPwdquhNI8xjOv2yLLxfJdFo6cRKLbJABMT0UjnGTmCf/KSaj7XdfmJMRCxLCbpX7hD5hMsBpRQfzu9IxrD5T53zsHKFsxzKpsIDHLtKxUdHeuUac5FBMFkPEEC4shjjHtx9BjLu5MsO/wgxV/sUQsdTvHqxBsAqOf1lhBGMwZ+Wr0j58efBbwg8UecEihhNMeKTvXwyxm0kFnw/z9+/oux5EPltIi3a49dmcdBLZBGsxLB54lth4NU9P0GOJr53XM6mCNN8rHKgI6jgvsv+4e8A5WDMOq950cb50mhp5wvTiF4lWn6JwZHPSqWSTgxeITGIy010jpPdn0epIXmxxTZF9xUMUmjFMULjbCb8TmiWvHNmcdCrZZNlLtIY6Iao4l004fOk9k7UNTLY3RSviiM9WVoh4g1znsHm4F5umMDcRIZ3Fmus9wtvs4yE9LBv8SNhNHdmcZCX/F2AAfFvNMvC7zroAAAAASUVORK5CYII="
                  alt="Logo"
                />
              </a>{" "}
            </div>

            <div className="hidden menuWrapper">
              <nav className="relative hidden lg:block">
                <ul className="flex flex-col lg:flex-row gap-4 lg:gap-10">
                  <li className="menuItemHasChildren relative group text-[1rem] lg:text-[1.125rem] font-Poppins font-semibold uppercase">
                    <span className="group-hover:text-accent text-accent2 pr-5 relative block cursor-pointer">
                      Home
                      <svg
                        stroke="currentColor"
                        fill="none"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="absolute right-0 top-[4px]"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg">
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </span>
                    <ul className="children relative lg:absolute opacity-0 top-full left-0 group-hover:opacity-100 lg:invisible lg:group-hover:visible before:absolute before:inset-0 before:bg-gray before:rounded-0 before:lg:rounded-[1.25rem] before:opacity-70 before:z-[-1] bg-blend-multiply rounded-0 lg:rounded-[1.25rem] bg-no-repeat bg-center bg-cover z-[1] bg-gray p-6 flex flex-col gap-3 divide-y divide-[rgba(0,0,0,.15)]">
                      <li className="relative text-[.9375rem] font-Poppins font-semibold capitalize">
                        <a
                          className="hover:text-accent text-accent2 pr-5 relative block"
                          title="Homepage 1"
                          href="/">
                          Homepage
                        </a>
                      </li>
                      {/* <li className="relative text-[.9375rem] font-Poppins font-semibold capitalize pt-2">
                      <a
                        className="hover:text-accent text-accent2 pr-5 relative block"
                        title="Homepage 2"
                        href="/home2">
                        Homepage 2
                      </a>
                    </li> */}
                    </ul>
                  </li>
                  <li className="menuItemHasChildren relative group text-[1rem] lg:text-[1.125rem] font-Poppins font-semibold uppercase">
                    <span className="group-hover:text-accent text-accent2 pr-5 relative block cursor-pointer">
                      Blog
                      <svg
                        stroke="currentColor"
                        fill="none"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="absolute right-0 top-[4px]"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg">
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </span>
                    <ul className="children relative lg:absolute opacity-0 top-full left-0 group-hover:opacity-100 lg:invisible lg:group-hover:visible before:absolute before:inset-0 before:bg-gray before:rounded-0 before:lg:rounded-[1.25rem] before:opacity-70 before:z-[-1] bg-blend-multiply rounded-0 lg:rounded-[1.25rem] bg-no-repeat bg-center bg-cover z-[1] bg-gray p-6 flex flex-col gap-3 divide-y divide-[rgba(0,0,0,.15)]">
                      <li className="relative text-[.9375rem] font-Poppins font-semibold capitalize">
                        <a
                          className="hover:text-accent text-accent2 pr-5 relative block"
                          title="Blog Style 1"
                          href="/blog">
                          Blog Style
                        </a>
                      </li>
                      {/* <li className="relative text-[.9375rem] font-Poppins font-semibold capitalize pt-2">
                      <a
                        className="hover:text-accent text-accent2 pr-5 relative block"
                        title="Blog Style 2"
                        href="/blog2">
                        Blog Style 2
                      </a>
                    </li> */}
                      <li className="relative text-[.9375rem] font-Poppins font-semibold capitalize pt-2">
                        <a
                          className="hover:text-accent text-accent2 pr-5 relative block"
                          title="Blog Detail"
                          href="/blog/:Id">
                          Blog Detail
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="menuItemHasChildren relative group text-[1rem] lg:text-[1.125rem] font-Poppins font-semibold uppercase">
                    <span className="group-hover:text-accent text-accent2 pr-5 relative block cursor-pointer">
                      Portfolio
                      <svg
                        stroke="currentColor"
                        fill="none"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="absolute right-0 top-[4px]"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg">
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </span>
                    <ul className="children relative lg:absolute opacity-0 top-full left-0 group-hover:opacity-100 lg:invisible lg:group-hover:visible before:absolute before:inset-0 before:bg-gray before:rounded-0 before:lg:rounded-[1.25rem] before:opacity-70 before:z-[-1] bg-blend-multiply rounded-0 lg:rounded-[1.25rem] bg-no-repeat bg-center bg-cover z-[1] bg-gray p-6 flex flex-col gap-3 divide-y divide-[rgba(0,0,0,.15)]">
                      <li className="relative text-[.9375rem] font-Poppins font-semibold capitalize">
                        <a
                          className="hover:text-accent text-accent2 pr-5 relative block"
                          title="Portfolio Style 1"
                          href="/portfolio">
                          Portfolio Style
                        </a>
                      </li>
                      {/* <li className="relative text-[.9375rem] font-Poppins font-semibold capitalize pt-2">
                      <a
                        className="hover:text-accent text-accent2 pr-5 relative block"
                        title="Portfolio Style 2"
                        href="/portfolio2">
                        Portfolio Style 2
                      </a>
                    </li>
                    <li className="relative text-[.9375rem] font-Poppins font-semibold capitalize pt-2">
                      <a
                        className="hover:text-accent text-accent2 pr-5 relative block"
                        title="Portfolio Style 3"
                        href="/portfolio3">
                        Portfolio Style 3
                      </a>
                    </li> */}
                      <li className="relative text-[.9375rem] font-Poppins font-semibold capitalize pt-2">
                        <a
                          className="hover:text-accent text-accent2 pr-5 relative block"
                          title="Portfolio Detail"
                          href="/portfolio/:Id">
                          Portfolio Detail
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="menuItemHasChildren relative group text-[1rem] lg:text-[1.125rem] font-Poppins font-semibold uppercase">
                    <span className="group-hover:text-accent text-accent2 pr-5 relative block cursor-pointer">
                      Pages
                      <svg
                        stroke="currentColor"
                        fill="none"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="absolute right-0 top-[4px]"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg">
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </span>
                    <ul className="children relative lg:absolute opacity-0 top-full left-0 group-hover:opacity-100 lg:invisible lg:group-hover:visible before:absolute before:inset-0 before:bg-gray before:rounded-0 before:lg:rounded-[1.25rem] before:opacity-70 before:z-[-1] bg-blend-multiply rounded-0 lg:rounded-[1.25rem] bg-no-repeat bg-center bg-cover z-[1] bg-gray p-6 flex flex-col gap-3 divide-y divide-[rgba(0,0,0,.15)]">
                      <li className="relative text-[.9375rem] font-Poppins font-semibold capitalize">
                        <a
                          className="hover:text-accent text-accent2 pr-5 relative block"
                          title="Plans"
                          href="/plans">
                          Plans
                        </a>
                      </li>
                      <li className="relative text-[.9375rem] font-Poppins font-semibold capitalize pt-2">
                        <a
                          className="hover:text-accent text-accent2 pr-5 relative block"
                          title="Error Page"
                          href="/404">
                          Error Page
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="menuItemHasChildren relative group text-[1rem] lg:text-[1.125rem] font-Poppins font-semibold uppercase">
                    <span className="group-hover:text-accent text-accent2 pr-5 relative block cursor-pointer">
                      Service
                      <svg
                        stroke="currentColor"
                        fill="none"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="absolute right-0 top-[4px]"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg">
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </span>
                    <ul className="children relative lg:absolute opacity-0 top-full left-0 group-hover:opacity-100 lg:invisible lg:group-hover:visible before:absolute before:inset-0 before:bg-gray before:rounded-0 before:lg:rounded-[1.25rem] before:opacity-70 before:z-[-1] bg-blend-multiply rounded-0 lg:rounded-[1.25rem] bg-no-repeat bg-center bg-cover z-[1] bg-gray p-6 flex flex-col gap-3 divide-y divide-[rgba(0,0,0,.15)]">
                      <li className="relative text-[.9375rem] font-Poppins font-semibold capitalize">
                        <a
                          className="hover:text-accent text-accent2 pr-5 relative block"
                          title="Service"
                          href="/service">
                          Service
                        </a>
                      </li>
                      <li className="relative text-[.9375rem] font-Poppins font-semibold capitalize pt-2">
                        <a
                          className="hover:text-accent text-accent2 pr-5 relative block"
                          title="Service Detail"
                          href="/service/:Id">
                          Service Detail
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="menuItemHasChildren relative group text-[1rem] lg:text-[1.125rem] font-Poppins font-semibold uppercase">
                    <a
                      className="group-hover:text-accent text-accent2 pr-5 relative block"
                      title="Contact"
                      href="/contact">
                      Contact
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </nav>
    </header>
  );
};

export default Navbar;

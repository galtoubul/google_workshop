import * as React from "react";
import "./HeaderLogo.scss";

export const HeaderLogo = (props) => {
  return (
    <div className={"logo"}>
      <svg
        viewBox="0 0 258.667 73.333"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <defs>
          <clipPath clipPathUnits="userSpaceOnUse" id="a">
            <path d="M0 550h623V0H0Z" />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="b">
            <path d="M0 550h623V0H0Z" />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="c">
            <path d="M747.332 65.352h1192.66v419.293H747.332Z" />
          </clipPath>
        </defs>
        <path
          d="M540.66 467.055c-7.125 7.195-7.125 18.859 0 26.058l50.985 51.489a18.117 18.117 0 0 0 25.8 0c7.125-7.196 7.125-18.864 0-26.059l-50.984-51.488a18.113 18.113 0 0 0-25.801 0zm-274.992-336.93 97.719-98.684c7.125-7.195 7.125-18.863 0-26.058a18.116 18.116 0 0 0-25.805 0l-97.719 98.683c-7.125 7.196-7.125 18.864 0 26.059a18.12 18.12 0 0 0 25.805 0"
          style={{
            fill: "#ff9f12",
            fillOpacity: 1,
            fillRule: "nonzero",
            stroke: "none",
          }}
          transform="matrix(.13333 0 0 -.13333 0 73.333)"
        />
        <g clipPath="url(#a)" transform="matrix(.13333 0 0 -.13333 0 73.333)">
          <path
            d="M135.508 98.668H18.246c-7.379 0-14.035 4.492-16.855 11.375-2.829 6.887-1.266 14.812 3.953 20.082l382.801 386.594a18.122 18.122 0 0 0 25.804 0c7.125-7.196 7.125-18.864 0-26.059l-.004-.004c-16.554-16.715-25.672-38.949-25.672-62.601v-74.114c0-140.757-113.39-255.273-252.765-255.273"
            style={{
              fill: "#95f0e1",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
          />
        </g>
        <path
          d="M388.273 353.938 135.508 98.668c139.375 0 252.765 114.516 252.765 255.27"
          style={{
            fill: "#13bebe",
            fillOpacity: 1,
            fillRule: "nonzero",
            stroke: "none",
          }}
          transform="matrix(.13333 0 0 -.13333 0 73.333)"
        />
        <g clipPath="url(#b)" transform="matrix(.13333 0 0 -.13333 0 73.333)">
          <path
            d="M409.113-.016H291.852c-10.075 0-18.247 8.25-18.247 18.426 0 10.176 8.172 18.426 18.247 18.426h117.261c10.075 0 18.246-8.25 18.246-18.426 0-10.176-8.168-18.426-18.246-18.426"
            style={{
              fill: "#ffd400",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
          />
          <path
            d="M370.027 98.668H135.508c119.254 0 216.273 97.984 216.273 218.418v110.969c0 33.496 12.914 64.984 36.364 88.664 21.25 21.461 49.5 33.281 79.554 33.281h.004c63.965 0 116-52.555 116-117.152V314.465c0-118.992-95.855-215.797-213.676-215.797"
            style={{
              fill: "#13bebe",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
          />
        </g>
        <path
          d="M583.703 314.465v118.383c0 32.629-13.281 62.183-34.668 83.445L351.781 317.086c0-120.438-97.019-218.418-216.273-218.418h234.519c117.821 0 213.676 96.805 213.676 215.797"
          style={{
            fill: "#0f7878",
            fillOpacity: 1,
            fillRule: "nonzero",
            stroke: "none",
          }}
          transform="matrix(.13333 0 0 -.13333 0 73.333)"
        />
        <path
          d="M505.531 451.313c0-10.176-8.168-18.426-18.246-18.426s-18.246 8.25-18.246 18.426c0 10.175 8.168 18.425 18.246 18.425s18.246-8.25 18.246-18.425"
          style={{
            fill: "#280000",
            fillOpacity: 1,
            fillRule: "nonzero",
            stroke: "none",
          }}
          transform="matrix(.13333 0 0 -.13333 0 73.333)"
        />
        <g clipPath="url(#c)" transform="matrix(.13333 0 0 -.13333 0 73.333)">
          <path
            d="M874.055 122.527v.528c-.524 0-.524-.528-1.047-.528 0 0 0-.531.523-.531zm3.222 14.746c-.527.532-1.05 1.059 0 2.723zm8.61 14.672c0-.527.601 0 .601 0-.601 0-.601 0-1.125.532 0-.532.524-.532.524-.532zm1.648 3.254v1.133h-1.047c0-.605 0-.605.524-1.133 0 0 0-.531.523-.531zm28.008 49.008h.598v.527zM1041.2 405.152c-.52 0-.52 0-.52.532h.52zm112.18 33.731c0 .605-.59.605-.59.605 0-.605.59-.605.59-.605zm-.59 1.137s0-.532-.53-.532h.53zm7.03 0c.53 0 1.05 0 1.65.527h-1.65zm-3.21 0-.53.527v-.527zm72.78 26.695c-5.39-1.664-10.78-1.664-16.69-2.192-4.35 0-9.22 0-13.49-1.664-2.17-.531-4.86-.531-7.03-.531-7.57 0-15.66-1.058-23.22-1.664-8.61-.527-16.7-1.586-25.31-2.723-8.61-1.058-17.22-1.586-25.91-3.25-9.66-2.195-19.4-3.253-28.53-4.312-14.01-2.191-28.08-4.914-42.09-6.051-3.74-.527-7.57-1.586-11.31-2.117-5.39-.606-10.26-1.133-15.13-2.191-2.69-.532-5.39-1.137-8.08 0v11.418c.6 2.195 0 3.781-1.05 4.917-5.39 8.696-13.484 13.614-23.218 16.336-1.57.528-3.219-.531-3.742-2.195-.527-2.191-1.051-3.781-2.172-5.445-2.695-6.504-5.395-12.555-8.613-19.059-2.696-6.504-5.391-13.082-8.614-19.586l-8.609-1.664c-10.262-2.195-20.519-4.918-30.254-7.035-15.578-3.855-31.23-7.637-46.883-11.496l-31.824-8.168c-14.527-3.781-28.531-8.168-42.613-13.613-14.528-5.446-29.055-10.285-43.133-17.395-1.574-.527-3.219-1.664-4.793-1.058-3.297.531-5.992-1.664-9.211-1.664-1.047-3.25-.523-5.973 1.121-8.168 1.051-1.665 2.098-3.25 1.574-4.915-.523-.531 0-1.589.524-2.722 1.125-2.723 10.262-11.949 12.957-13.086 6.516-2.117 13.48-3.781 20.519-5.973h2.696c4.867 0 9.136-1.058 13.48 0 3.742 0 7.563.528 11.309 2.192 11.832 4.386 24.262 7.64 36.691 10.89 11.832 2.723 23.141 7.11 34.449 10.891 4.344 1.664 9.211 3.254 13.481 5.445 1.121 1.059 2.695 1.059 4.344 1.664 1.648 0 3.742-.605 5.39 0 2.172.532 3.219 1.59 4.867 2.723.524 0 1.051.531 1.575.531 4.343.528 8.086 3.25 12.953 3.25 1.125 0 2.172.531 3.222 1.059 4.344 2.195 9.211 2.195 13.481 3.859.598 0 1.121-.531 1.644-.531 0-1.133-.523-2.192-1.046-3.856-1.649-4.312-3.821-9.226-5.993-14.144-7.488-16.863-13.48-34.336-21.566-51.199-.523-1.059-1.047-2.196-1.047-2.723-.527-4.312-2.699-8.168-4.344-12.48l-4.793-11.497c-4.343-10.285-8.687-21.781-12.957-33.73-4.343-12.555-9.211-25.031-14.601-38.117-2.098-5.973-4.793-13.082-7.488-19.059-2.172-5.445-3.297-10.89-5.993-16.336-.523-.527-.523-1.058-.523-1.664-1.051-5.445-3.223-10.285-4.867-15.199-1.051-2.195-1.575-4.918-2.098-7.109-2.172-9.758-3.297-19.59-7.039-28.817-1.648-3.855-2.695-8.769-3.223-13.082-.523-4.918 1.051-9.832-2.172-14.746v-1.062c0-5.446 0-10.891-2.695-15.805-.523-1.59 0-3.781 0-5.445h1.649c4.793 1.664 9.136 4.386 11.308 9.3 2.172 2.121 1.57 4.844 2.695 7.035.524 2.723 2.172 4.915 2.172 7.637.524 2.195 2.696 4.387 1.575 7.11 2.171 4.312 2.171 8.699 5.39 12.48 1.649 1.133 2.696 3.254 2.696 4.914 0 1.664 0 3.254 1.125 4.918.523.527 0 1.059 0 1.586 0 2.723.523 4.918 2.695 6.582 0 .527 1.047 1.059 1.047 1.586-1.047 3.859 1.648 5.445 3.222 8.168 2.168 3.328 3.219 6.582 4.34 10.363.528 2.192 1.051 4.387 3.223 5.446 0 1.664 0 3.25 1.648 3.855 0 .531.524 1.059.524 2.117.523-1.058.523-1.586.523-1.586.524 0 1.047.528 1.649 1.059l9.66 18.527c1.121 2.723 1.648 4.918 4.344 6.504 1.046.606 2.171 2.195 2.695 3.86 1.57 5.445 4.867 9.226 6.965 14.14.597 1.059 1.121 2.723 2.695 3.254 0 2.723 1.125 4.387 2.695 5.973 1.649 3.328 4.344 6.05 5.992 9.304 3.219 7.032 8.086 13.614 12.356 20.118 4.344 6.578 9.211 13.082 10.258 21.25 0 .531.527 1.058.527 1.664 3.817 5.445 6.516 10.89 10.258 15.73 4.344 5.445 8.09 11.496 10.785 17.473l6.438 13.613c2.699 3.781 4.343 8.168 6.515 12.477 2.172 4.918 3.746 10.363 6.442 15.808l3.218 8.696c1.125 3.328 2.7 6.582 3.297 9.832l1.574 4.386a479.62 479.62 0 0 1 4.872 15.203l2.17 8.696c2.17 1.136 4.26 2.195 5.91 3.328 8.61 3.254 17.22 7.035 25.31 10.285 4.87 2.195 9.22 3.328 14.08 5.445 0 0 0 .606.53.606-1.65 1.058-4.35 0-4.87 2.722 7.56 2.118 14.53 4.313 21.56 7.036 3.75 1.132 7.57 2.191 11.31 2.722 5.92 1.664 11.31 3.856 17.3 5.973 5.39 2.195 10.79 3.859 15.58 6.582 3.3 2.191 7.04 3.25 10.78 3.781 6.52 1.664 13.48 2.723 20.52 3.856 4.35.531 7.57 2.117 11.31 2.722-1.57 1.59-3.74 1.59-5.39.532-2.17-.532-3.74-.532-5.39.527 4.34 1.664 9.21 2.195 14 2.723 2.7.531 5.99.531 8.69 1.664 6.44 1.058 12.35 3.254 18.87 3.781.52 0 2.1 0 2.1.531 1.65 1.664 3.29 1.664 5.39 2.192 3.29 1.058 6.51 2.722 9.73 3.781 4.35 3.328 9.14 3.859 14.01 5.445 5.91 1.137 11.3 3.328 16.7 4.918 0 0 0 .527.6 1.133zm-173.66-139.461c2.17-5.445-1.57-8.695-3.74-11.949-4.87-8.696-10.79-16.864-21.57-20.117-1.65 5.445 0 9.226 2.7 12.48 3.74 4.387 7.56 8.168 11.83 12.023 3.29 2.723 5.39 6.504 10.78 7.563zm64.18-176.367c2.17 2.722 2.17 5.445 4.34 7.035 3.22 2.191 2.7 4.914 4.27 7.109 1.12 2.192 1.12 4.914 2.17 7.032 5.92 8.167 8.09 16.941 13.48 25.64 4.87 10.891 9.21 16.863 13.48 29.418 2.17 6.504 1.65 13.008 5.39 17.926 4.87 6.578 1.13 9.832 6.52 14.746 1.57 7.562 1.57 13.008 5.92 18.453.52 1.137.52 2.195 1.04 3.328l-3.74 2.117c-1.65 0-1.65 0-2.7.606-5.39-2.192-5.91-6.051-8.08-9.832-5.92-10.36-8.62-15.277-12.96-24.504l-10.78-23.973c-2.17-4.918-3.75-9.758-7.57-13.613-2.17-2.195-2.17-4.918-3.74-7.035-2.7 1.058-1.65-3.856-3.82-8.168l-10.78-19.664c-3.22-5.445-6.97-11.418-12.89-15.731-.59 1.59-1.12 2.723-1.12 3.782-1.05 9.226-1.05 18-.52 27.226.52 3.254 1.05 5.977 1.05 9.227 0 13.086 2.69 19.664 5.39 32.144 2.17 8.168 4.87 15.805 5.99 19.586 1.05 4.387 1.57 7.641 2.7 8.774 4.79 4.839 1.04 13.007-4.87 17.394-4.35 3.781-8.62 7.11-13.48 9.227-1.65.605-3.22 1.664-4.87 1.664-6.44 1.058-12.96 1.058-19.39 2.195-1.13 0-2.7 0-3.82.527 1.12 3.254 2.17 5.977 2.69 8.7.6 3.855 1.65 7.636 3.3 12.023 1.04 3.781 1.57 8.168 2.09 12.481.6 4.386-1.57 8.168-4.79 10.89-3.82 3.25-7.56 5.446-11.91 6.578-3.22 1.059-6.44 1.059-9.66 2.118-5.39 1.664-10.26.605-14.6-2.723-8.09-5.973-8.09-5.973-17.23-18.453-1.12-1.133-1.12-1.133-1.64-3.328-5.39-14.141-2.7-11.95-1.57-25.563 2.69-3.781 2.09-8.168 5.39-11.949 4.79-4.387 3.74-8.774 9.13-12.555 8.62-6.504 18.87-7.637 29.14-7.637 5.39 2.192 11.3 0 17.74 0-9.14-16.335-8.08-12.48-20.44-50.066-2.7-7.641-4.87-19.59-5.39-32.672 0-7.109 1.05-14.144 1.57-20.722 2.17-10.891 3.82-17.395 14.08-22.84 3.22-1.664 6.96-3.254 10.18-5.446 5.4-3.859 10.79-2.722 16.18-.531 4.34 1.59 8.68 3.254 12.43 5.445 4.87 2.118 10.26 5.977 13.48 9.758 0 .528 3.22 1.664 3.22 3.856zm93.83 111.023c-1.65-3.25-3.74-6.504-5.91-9.226-9.74-13.614-20.52-26.696-30.78-40.309-5.39-7.641-11.31-14.672-17.75-22.84-.52 1.586-1.12 2.192-1.12 2.723 1.64 10.89 3.29 21.781 7.03 32.672 8.09 22.84 21.58 42.425 37.22 60.957 3.23 3.25 5.92 7.636 10.27 10.359 1.57 1.059 3.21 3.254 4.26 4.918 2.7 0 4.34-1.664 4.87-3.859.53-2.117 1.05-4.309 1.65-7.032zm109.49 38.723c-5.39.531-10.78-1.133-14.6-5.445-4.87-5.446-9.14-12.024-12.36-18.528-4.87-9.832-10.26-19.058-17.3-27.758l-34.52-43.031c-4.27-5.445-9.66-10.363-14.01-15.277-1.05-1.059-2.69-1.59-3.74-2.723-1.65 6.578-.52 12.024-.52 17.469 0 2.723 1.04 5.445 2.09 8.168 3.82 14.144 7.04 27.758 11.38 41.371 3.23 11.418 6.97 22.309 10.79 33.73 1.57 4.914 2.69 9.832 0 14.141.52 1.137 1.04 1.664 1.04 2.723 3.23 8.773 1.65 14.218-6.43 18-3.82 2.195-7.57 3.254-11.39 4.918-3.74 1.058-7.48 3.781-10.78 2.191-4.79-2.191-8.09 0-11.83.531-.53 0-1.65 0-2.7-.531l-5.39-1.664c-.53-3.25-.53-5.973-3.75-7.109h.53c-.53 0-1.12-.528-1.65-.528l-.52.528c-1.05-.528-2.18-1.059-2.7-1.586-.52-1.664 0-3.254-2.17-4.387-1.57-1.059-2.7-3.254-3.74-4.313-4.35-4.386-7.05-9.832-11.91-13.082-.53-.531-1.05-1.664-1.57-2.722-2.18-3.254-3.82-7.11-5.4-10.364-5.39-7.636-9.73-16.335-17.82-22.308-.52-1.137-1.05-2.195-1.57-2.723-2.7-4.918-5.39-9.832-5.99-15.808-.53-3.782-1.57-8.168-4.8-10.891h.53c-.53-2.723-.53-6.504-3.22-7.637-4.87-1.59-5.99-5.445-7.57-9.226-1.12-2.723-2.69-5.977-3.82-8.168 0-2.723.61-5.446 0-8.168 0-3.86-1.04-8.168-1.57-12.028-.52-7.031.53-14.14 6.44-19.058 3.82-2.723 8.09-5.973 12.44-8.168 6.44-3.25 12.95-4.309 20.44 0 5.99 3.859 10.78 8.168 15.13 14.219l16.17 23.371c1.05 1.664 1.65 3.855 4.34 4.914 1.05-9.227 1.58-18.528 2.7-28.891 3.22-2.117 6.97-5.445 10.79-7.562 6.96-4.387 13.48-4.914 20.44 0 5.91 4.312 10.26 9.757 15.65 15.203 8.09 8.168 13.48 16.336 19.92 25.637l19.47 27.757c8.09 11.418 14.53 22.309 22.62 33.731 5.91 8.695 9.73 19.058 15.65 28.89-1.65.528-2.17 2.192-3.22 2.192zm91.06-7.637c-.52 0-1.57 0-2.09-.531-4.35-1.133-8.09-6.051-10.27-9.301-1.12-1.59-5.91-10.891-7.56-13.086-9.14-13.613-25.91-38.644-35.05-52.258l-2.69-3.254c-4.87-7.109-11.83-13.082-17.83-19.586-3.74-3.859-7.48-7.109-12.35-9.832-6.52-3.253-12.43-7.64-20-7.64-5.39-.528-10.18 0-14 5.445v10.891c0 3.859.52 8.168 1.65 12.027 2.69 6.504 3.22 14.141 6.96 20.645.6.605 0 1.664.6 2.195 1.57 4.914 2.1 9.832 5.92 13.082.52 1.059 1.05 2.195 1.05 3.781 2.17 4.387 3.82 8.774 5.91 13.086 2.17 4.387 4.34 8.695 5.99 13.082 4.79 9.227 10.79 18.531 15.06 27.758 0 .527.52 1.133 1.12 1.133 1.04-1.133 9.13 16.336 15.58 18.453 5.39-4.84 2.69-11.949 3.29-18.453 2.69-3.856 5.92-5.445 10.78-4.914.53 1.058 1.05 1.586 1.05 2.191 1.65 3.781 2.7 7.035 3.22 10.891.53.531.53 1.59.53 2.117-1.05 6.582-3.75 12.027-9.14 14.75-3.75 2.191-8.09 3.781-11.83 5.973-3.82 2.195-7.04 2.722-11.39 0-.52-.528-1.05-.528-1.57-.528-3.82.528-6.52-1.664-8.61-3.859-5.99-4.84-11.91-9.227-17.3-14.141-5.39-4.918-10.78-9.758-15.05-15.203-6.52-8.168-11.91-16.941-17.3-25.109-10.78-15.199-16.7-32.067-21.04-49.535-.53-2.196-1.05-4.918-1.05-7.036 0-7.109 0-13.613.52-20.722 1.12-8.168 3.82-15.805 9.21-22.309 4.8-5.445 10.79-9.832 17.75-12.027 2.7-.527 5.39-1.586 8.09-2.117l4.87-1.664c10.26-.528 19.92 0 29.13 4.386 1.05 0 2.17.532 3.22.532 1.65 1.586 2.69 3.25 3.74 4.308l21.05 16.336c2.17 1.664 4.34 3.328 5.39 6.051 5.91 9.226 11.31 19.059 18.35 27.758 4.86 6.504 16.69 23.972 20.51 31.535 1.05 2.195 5.4 12.027 6.97 13.613 5.39 7.11 9.73 14.219 13.48 22.387 1.64 3.781-.53 8.699-4.87 8.699zm64.18-26.699v.531c-3.75-4.918-8.61-8.699-14.53-11.422-3.82-1.058-7.04-3.781-10.26-5.445-6.44-2.723-12.95-3.25-19.39-5.445-1.65 1.664 0 2.722.52 3.254 5.39 6.578 11.83 12.023 18.87 17.468 5.92 4.84 15.65 10.285 18.87 11.95 7.04 3.253 14 7.109 21.57 10.363 1.65.527 3.22.527 5.39.527-2.69-5.973-7.04-10.359-11.83-14.14zm49.05 32.672c-2.7 1.664-5.39 3.254-8.09 4.386-13.48 4.313-27.48 3.254-40.44-2.722-11.31-4.914-22.61-10.36-32.87-17.469-.53-.531-1.58-.531-3.22-1.059 0 2.192.52 3.25.52 4.915.53 2.722 1.65 5.445 2.17 8.699.53 6.504 2.7 12.476 5.39 17.922 2.7 5.445 4.35 10.363 5.4 15.808.52 4.914 1.64 9.301 2.69 13.082 2.7 9.227 5.92 18.532 8.09 27.227 2.17 7.109 2.17 14.672-.52 20.722-4.87 3.254-9.21 5.446-13.48 8.168-2.7 2.118-7.57 2.723-10.79 2.118-2.17-.528-3.82-2.723-4.87-4.84-1.04-3.328-1.64-7.637-2.69-9.832-7.56-17.395-15.13-34.336-23.22-51.731-.52-1.664-1.57-3.781-1.57-5.445 0-6.504-2.7-11.418-4.87-16.863-1.64-5.977-3.74-11.422-5.91-17.473-2.17-4.309-7.04-19.059-8.09-22.309-1.12-3.781-2.17-7.64-2.7-11.421-2.69-13.082-5.91-26.168-8.08-39.176-2.7-14.746-4.35-29.418-3.23-44.168.53-3.25 0-7.031-1.12-10.891v-2.722c0-9.227 3.22-17.922 9.21-25.032.53-.531 1.05-1.058 1.58-2.195 3.22-3.781 6.51-7.031 10.26-9.754 5.91 0 8.08 3.781 11.31 7.637 0 3.254 1.12 7.035 0 10.285a85.296 85.296 0 0 0-1.58 16.336c-.6 4.387-1.12 8.773 3.75 12.027 2.17 1.586 3.74 5.446 3.22 8.696-1.05 6.503 2.69 10.89 4.86 17.394 3.75-6.504 8.62-11.418 12.96-16.336 5.91-5.973 12.95-10.89 21.04-14.672 2.1-1.058 4.8-1.664 7.49-2.191 5.39-.531 10.26.527 12.96 5.445 1.64 2.192 2.69 4.387 5.39 5.973.52.605 1.12 2.195 1.65 3.328-2.17 1.059-3.82 2.117-5.4 3.254-1.12.527-2.69.527-3.81 1.586-2.7 3.328-5.4 6.582-7.49 9.832l-14.61 23.445c-1.04 1.59-2.17 3.781-2.17 5.977 3.82 2.722 8.09 3.25 12.43 4.308 7.57 1.664 15.13 3.86 22.09 8.774 1.13.531 2.18 1.59 3.82 2.117 1.57.605 3.22 1.664 4.8 2.195 1.65 1.133 2.69 2.192 4.34 3.25l4.87 3.328c1.05 1.059 2.69 2.723 4.27 3.782l3.81 3.781c1.58 1.137 2.7 3.328 3.75 3.328 2.7.531 1.65 3.254 2.7 4.312 5.91 5.446 9.73 13.083 14.6 20.192 1.57 2.117 2.09 4.84 2.7 7.562.52 3.329-.61 5.446-3.3 7.11zm64.18-43.563c0 5.446 2.17 9.227 4.34 13.086l4.27 8.168c2.69 4.914 4.34 9.754 7.04 14.672 1.05 2.191 2.69 4.387 3.74 7.109 1.65 4.309 4.35 8.696 10.79 9.227 0-1.059.6-2.195.6-3.254-1.13-2.191-1.13-4.387-1.13-7.109.53-2.723 0-5.446-1.05-8.168-3.82-7.032-7.56-14.672-13.48-21.176-4.34-4.914-9.21-8.773-15.12-12.555zm60.96-44.621c0 .531 5.91 7.563 6.44 8.699 4.86 6.504 9.21 13.614 14 20.118 5.39 8.168 10.78 16.336 15.65 24.503 2.7 4.387 4.34 8.696 2.7 14.747-1.05 3.781-4.27 8.168-8.09 3.781-2.7-2.723-5.39-5.445-7.56-8.695-6.44-8.7-12.36-17.473-17.75-26.7-6.52-10.89-14.6-20.117-22.09-29.949-6.52-7.637-13.48-14.141-20.52-21.25-8.09-8.168-16.7-14.144-26.44-19.059-3.74-2.195-7.56-3.253-11.3-4.917-4.35-1.586-8.09-.528-11.31 2.722 0 3.328-.53 6.051-1.13 9.305 1.65 2.723 2.7 6.504 2.7 10.359 0 1.59 0 2.723.6 3.781 2.69 8.168 5.91 15.809 9.14 23.446 1.64 4.84 3.74 9.758 8.08 13.008 1.65 0 3.22-.528 4.35 0 2.69 1.664 5.91 2.195 9.13 2.722 1.65 0 2.7 1.137 4.35 2.196 3.74 3.25 7.48 5.972 12.35 7.636 1.13.532 2.7 1.059 3.22 2.196 2.7 3.781 5.99 6.504 9.21 9.226 3.22 3.856 5.92 8.168 8.61 12.024 5.92 9.757 8.62 20.648 8.09 32.671-.52 6.504-2.7 11.95-8.09 16.336-5.91 4.84-12.43 8.7-20.52 9.227-1.04.531-2.69.531-3.74 1.059-3.22 2.195-6.44 2.722-10.26 3.328-6.96-3.856-14-8.168-18.87-14.219l-14-15.731c-9.74-10.89-17.83-22.386-24.27-35.394-3.22-6.051-6.44-12.023-9.13-18.527-6.52-13.614-11.39-27.227-11.91-42.504-.53-10.891 2.17-21.254 7.04-30.481 4.87-9.226 11.83-16.336 22.09-19.586 2.17-.531 4.34-1.664 5.92-1.664 9.73.528 18.87-.531 28.08 2.192 5.39 1.664 11.83 2.722 16.7 5.976 6.44 3.856 12.35 8.168 17.75 14.141 2.17 1.664 3.29 4.387 5.39 6.051 7.56 7.562 13.48 16.867 22.16 23.371 1.05 1.133 2.7 3.855 3.23 3.855zm58.78 44.621c0 5.446 2.1 9.227 4.27 13.086l4.34 8.168c2.7 4.914 4.27 9.754 6.97 14.672 1.12 2.191 2.69 4.387 3.82 7.109 1.57 4.309 4.27 8.696 10.78 9.227 0-1.059.52-2.195.52-3.254-1.04-2.191-1.04-4.387-1.04-7.109.52-2.723 0-5.446-1.13-8.168-3.74-7.032-7.56-14.672-13.47-21.176-4.27-4.914-9.14-8.773-15.06-12.555zm60.88-44.621c0 .531 5.92 7.563 6.52 8.699 4.79 6.504 9.14 13.614 14 20.118 5.39 8.168 10.79 16.336 15.66 24.503 2.69 4.387 4.27 8.696 2.69 14.747-1.12 3.781-4.34 8.168-8.09 3.781-2.69-2.723-5.39-5.445-7.56-8.695-6.52-8.7-12.43-17.473-17.82-26.7-6.44-10.89-14.53-20.117-22.09-29.949-6.45-7.637-13.49-14.141-20.52-21.25-8.09-8.168-16.7-14.144-26.36-19.059-3.82-2.195-7.57-3.253-11.39-4.917-4.27-1.586-8.09-.528-11.31 2.722 0 3.328-.52 6.051-1.04 9.305 1.57 2.723 2.69 6.504 2.69 10.359 0 1.59 0 2.723.53 3.781 2.69 8.168 5.91 15.809 9.13 23.446 1.65 4.84 3.82 9.758 8.09 13.008 1.65 0 3.3-.528 4.34 0 2.7 1.664 5.92 2.195 9.14 2.722 1.65 0 2.7 1.137 4.34 2.196 3.75 3.25 7.57 5.972 12.44 7.636 1.04.532 2.69 1.059 3.22 2.196 2.69 3.781 5.91 6.504 9.13 9.226 3.22 3.856 5.92 8.168 8.61 12.024 5.99 9.757 8.69 20.648 8.09 32.671-.52 6.504-2.69 11.95-8.09 16.336-5.91 4.84-12.35 8.7-20.44 9.227-1.12.531-2.69.531-3.82 1.059-3.22 2.195-6.44 2.722-10.18 3.328-7.04-3.856-14.08-8.168-18.87-14.219l-14.09-15.731c-9.66-10.89-17.74-22.386-24.26-35.394-3.22-6.051-6.44-12.023-9.13-18.527-6.45-13.614-11.31-27.227-11.84-42.504-.59-10.891 2.1-21.254 6.97-30.481 4.87-9.226 11.9-16.336 22.09-19.586 2.17-.531 4.34-1.664 5.99-1.664 9.66.528 18.87-.531 28.01 2.192 5.39 1.664 11.83 2.722 16.7 5.976 6.51 3.856 12.43 8.168 17.82 14.141 2.17 1.664 3.22 4.387 5.39 6.051 7.57 7.562 13.48 16.867 22.1 23.371 1.04 1.133 2.69 3.855 3.21 3.855zm56.62 72.906c1.12-3.781-1.05-5.445-3.22-7.562.52-2.191 0-4.387-1.65-6.578-1.05 2.722 0 4.914 1.65 6.578-.52 3.254 1.05 5.445 3.22 7.562 0 6.051 2.7 10.364 4.34 15.809 1.05 2.723 3.22 4.914 4.87 8.168 0-7.035-3.29-15.809-9.21-23.977zm8.09 33.278c0 .531 0 1.058.52 2.117 1.13-1.059.6-1.586-.52-2.117zm15.13 34.261c-2.18-4.917-3.82-10.363-6.52-15.808 0-.527-1.05-1.059-2.1-1.586.53 2.191 1.05 4.309 1.05 5.973.52 7.109 3.75 11.949 9.14 14.671-.53-1.058-1.05-1.585-1.57-3.25zm4.86 10.36s-.6-.527-.6-1.059c.6-2.191-.52-3.855-2.09-5.445-.6 2.117 0 4.312 2.09 5.977 0 0-.52.527 0 1.058v1.133c.6-.606 1.13-1.133.6-1.664zm79.76 65.875c-2.17.527-4.27 1.664-6.44 2.191a178.37 178.37 0 0 1-34 3.254c1.12 2.192 2.17 4.387 2.7 6.578 1.12 4.313 2.69 8.7 4.86 12.481.53 1.133 1.65 2.722 1.05 3.855-.52 5.977-1.57 11.422-4.79 16.867-1.12 1.586-2.7 2.723-3.82 3.782-6.44 4.382-12.96 6.578-20.45 6.578-2.17 0-3.29 2.722-5.99 1.058-1.57-1.058-4.27-.531-5.91-.531-2.17-4.914-3.22-9.301-5.4-13.082-1.57-4.387-3.74-8.168-5.91-11.949-.52-1.664-1.65-2.723-2.17-3.856l-8.09-23.976c-7.56-1.059-15.05-1.586-22.62-2.723-6.51-1.058-12.43-1.586-18.87.606-.52 0-1.12 0-1.64-.606-.53-1.058-.53-1.586-1.06-3.25-1.12 0-2.17-.531-3.21-1.058 1.04-4.387 1.04-4.918 3.21-6.582 5.92-3.782 12.36-4.84 18.88-4.84h18.87c-5.39-14.746-10.78-29.418-15.65-44.168-2.7-7.563-4.87-15.199-7.04-22.84-3.22-10.891-5.92-21.781-8.61-32.672-2.18-8.168-4.87-15.805-6.45-23.445-2.17-9.227-3.81-18.453-7.03-27.227-.53-1.058-1.05-3.25-1.05-4.84-1.13-4.386-1.13-8.773-2.7-13.082-2.17-4.918-2.17-10.363-3.22-15.277-.6-5.445.53-10.891-2.17-15.809-.52-.527-.52-1.586-.52-2.117.52-3.855.52-7.109-1.13-10.89-.52-.606-.52-2.192-.52-3.329.52-10.285 2.17-20.117 5.39-30.476 1.05-3.254 2.7-7.035 4.87-10.363 2.69-4.309 5.91-8.168 10.26-9.227 6.96-2.723 14.53-4.914 22.09-3.25 2.7.527 5.91.527 9.14 1.059 3.22 2.191 6.51 3.855 9.21 5.445l1.57 7.109c.53 2.192 1.65 4.914 2.69 7.032 2.18 5.445 4.35 10.89 4.87 16.941 0 4.312 1.65 8.168 2.7 12.48 1.05 4.914 3.22 9.301 4.34 14.141 1.05 2.195 1.57 4.387 1.57 6.582-.52 3.781.53 7.031 1.65 9.754 3.22 8.168 5.92 15.809 9.66 23.445l9.21 14.145 6.44 9.301s10.79 18.453 10.79 19.058c0 0 3.22 9.227 3.22 9.758 0 .527-2.1 5.445-2.7 5.445-.52 0-5.91-8.168-5.91-8.699 0-.527-2.7-3.25-3.22-3.781-.53-.606-2.18-6.051-2.18-6.051l-5.39-7.031c-11.3-14.75-19.92-31.086-29.13-47.422-9.14-15.731-17.75-32.672-27.48-47.871-.53-1.664-2.17-2.195-3.22-3.86-4.35 7.641-7.04 14.75-6.44 22.918.52 2.723 1.05 5.446.52 8.168-1.12 4.914-.52 9.227-.52 14.141-.6 5.445.52 10.363 2.69 15.277.53-.605.53-1.132 1.58-2.191.52 2.191 1.64 3.25 1.64 4.914 2.7 10.285 6.97 19.59 11.31 28.816 2.7 4.915 4.87 9.832 7.04 14.747 1.57 3.253 2.7 7.035 4.8 10.285l9.21 15.808c3.74 6.578 6.43 13.082 9.13 19.586 2.7 6.051 3.82 12.028 7.57 17.473 1.64 2.191 2.17 7.637 1.64 10.891-2.17 0-2.17-2.196-3.29-3.254-.53-1.133-1.05-1.664-2.7-.606 1.65 5.445 4.87 9.832 7.04 14.75 3.74 7.637 7.56 15.199 10.26 22.84 1.05 3.25 2.17 6.578 3.74 9.832 2.18 3.25 2.7 6.504 3.83 9.754 0 1.137 0 1.664.52 2.723 10.78.605 21.56 1.136 32.87 1.136 5.39.528 10.26 1.586 14.53 4.309 1.13.605 1.65 1.664 2.7 3.328-1.57.531-2.7 1.059-3.22 1.59"
            style={{
              fill: "#31afb4",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
          />
        </g>
      </svg>
    </div>
  );
};

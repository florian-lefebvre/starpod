const ForwardIcon = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9 10L9 15"
      stroke="#9DA3AF"
      stroke-width="1.5"
      stroke-linecap="square"
    />
    <path
      d="M13.75 10H13.25C12.5596 10 12 10.5596 12 11.25V13.75C12 14.4404 12.5596 15 13.25 15H13.75C14.4404 15 15 14.4404 15 13.75V11.25C15 10.5596 14.4404 10 13.75 10Z"
      stroke="#9DA3AF"
      stroke-width="1.5"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M3.25 12C3.25 7.16751 7.16751 3.25 12 3.25C14.2529 3.25 16.3063 4.10071 17.8578 5.5H15.5V7H20.25V2.25H18.75V4.28624C16.9474 2.70773 14.5852 1.75 12 1.75C6.33908 1.75 1.75 6.33908 1.75 12C1.75 17.6609 6.33908 22.25 12 22.25C17.6609 22.25 22.25 17.6609 22.25 12C22.25 10.7394 22.0221 9.5305 21.6047 8.41329L20.2105 8.96769C20.5593 9.91159 20.75 10.9328 20.75 12C20.75 16.8325 16.8325 20.75 12 20.75C7.16751 20.75 3.25 16.8325 3.25 12Z"
      fill="#9DA3AF"
    />
  </svg>
);

export default function ForwardButton() {
  return ForwardIcon;
}

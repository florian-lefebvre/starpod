import { isMuted } from '../state';

function MuteIcon() {
  return (
    <svg
      width="18"
      height="14"
      viewBox="0 0 18 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.16876 0.629155C8.83063 0.156392 9.75 0.629514 9.75 1.44289V12.5565C9.75 13.3699 8.83063 13.843 8.16876 13.3702L4.5 10.7497H2.75C1.64543 10.7497 0.75 9.85427 0.75 8.7497V5.2497C0.75 4.14513 1.64543 3.2497 2.75 3.2497H4.5L8.16876 0.629155Z"
        fill="#9DA3AF"
      />
      <path
        d="M11.9953 10.6785C12.926 9.73119 13.5 8.43238 13.5 6.99951C13.5 5.56061 12.9211 4.25692 11.9836 3.30859"
        stroke="#9DA3AF"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M14.0836 1.16602C15.5766 2.65897 16.5 4.72147 16.5 6.99965C16.5 9.27782 15.5766 11.3403 14.0836 12.8333"
        stroke="#9DA3AF"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export default function MuteButton() {
  return (
    <button
      type="button"
      class="group relative md:order-none"
      onClick={() => (isMuted.value = !isMuted.value)}
      aria-label={isMuted ? 'Unmute' : 'Mute'}
    >
      <div class="absolute -inset-4 md:hidden" />
      <MuteIcon />
    </button>
  );
}

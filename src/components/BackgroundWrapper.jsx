export default function BackgroundWrapper({ children }) {
    return (
      <div
        className="min-h-screen
                   bg-cover 
                   bg-center
                   bg-bg
                   grid
                   place-items-center"
        style={{ backgroundImage: "url('/assets/background.png')" }}
>
        {children}
      </div>
    );
  }

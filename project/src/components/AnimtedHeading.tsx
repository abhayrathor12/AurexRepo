interface AnimatedHeadingProps {
    title: string;
    subtitle?: string;
  }
  
  export function AnimatedHeading({ title, subtitle }: AnimatedHeadingProps) {
    return (
      <>
        <div className="text-center mb-2">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 overflow-hidden">
            <span className="inline-block animate-[slideUp_0.6s_ease-out]">
              <span className="bg-gradient-to-r from-[#223258] via-[#a8042b] to-[#223258] bg-clip-text text-transparent animate-[gradient_3s_ease-in-out_infinite] bg-[length:200%_100%]">
                {title}
              </span>
            </span>
          </h2>
  
          {subtitle && (
            <p className="text-xl text-slate-600 max-w-2xl mx-auto animate-[fadeIn_0.8s_ease-out_0.3s_both]">
              {subtitle}
            </p>
          )}
        </div>
  
        <style>{`
          @keyframes slideUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
  
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
  
          @keyframes gradient {
            0%, 100% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
          }
        `}</style>
      </>
    );
  }
  
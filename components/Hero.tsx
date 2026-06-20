function PhoneMockup() {
  return (
    <div
      className="relative w-[268px] h-[548px] rounded-[44px] border-[10px] border-[#1d1d1d] flex-shrink-0"
      style={{
        boxShadow:
          "inset 0 0 0 1px rgba(255,255,255,0.05), 0 50px 100px -20px rgba(0,0,0,0.95)",
      }}
    >
      {/* Dynamic Island */}
      <div className="absolute top-[10px] left-1/2 -translate-x-1/2 w-[88px] h-[26px] bg-black rounded-full z-10" />

      {/* Power button */}
      <div className="absolute right-[-12px] top-[96px] w-[3px] h-[58px] bg-[#2a2a2a] rounded-r-sm" />

      {/* Volume buttons */}
      <div className="absolute left-[-12px] top-[78px] w-[3px] h-[36px] bg-[#2a2a2a] rounded-l-sm" />
      <div className="absolute left-[-12px] top-[122px] w-[3px] h-[36px] bg-[#2a2a2a] rounded-l-sm" />

      {/* Screen */}
      <div className="h-full rounded-[34px] overflow-hidden bg-[#0b141a] flex flex-col">

        {/* Status bar */}
        <div className="flex justify-between items-center px-5 pt-[46px] pb-[4px]">
          <span className="text-white text-[11px] font-semibold tracking-tight">9:41</span>
          <div className="flex items-center gap-[5px]">
            <svg width="14" height="11" viewBox="0 0 14 11" aria-hidden="true">
              <rect x="0" y="7" width="2.5" height="4" rx="0.5" fill="white" />
              <rect x="3.8" y="4.5" width="2.5" height="6.5" rx="0.5" fill="white" />
              <rect x="7.6" y="2" width="2.5" height="9" rx="0.5" fill="white" />
              <rect x="11.4" y="0" width="2.5" height="11" rx="0.5" fill="white" fillOpacity="0.3" />
            </svg>
            <svg width="15" height="11" viewBox="0 0 15 11" fill="none" aria-hidden="true">
              <circle cx="7.5" cy="9.5" r="1.5" fill="white" />
              <path d="M4.2 6.3c1.8-1.8 4.8-1.8 6.6 0" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
              <path d="M1.5 3.5C4.2 1 10.8 1 13.5 3.5" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeOpacity="0.4" />
            </svg>
            <svg width="24" height="12" viewBox="0 0 24 12" fill="none" aria-hidden="true">
              <rect x="0.5" y="0.5" width="20" height="11" rx="3.5" stroke="white" strokeOpacity="0.35" />
              <rect x="2" y="2" width="15" height="8" rx="2" fill="white" />
              <path d="M22 4v4c1-.4 1.5-1 1.5-2s-.5-1.6-1.5-2z" fill="white" fillOpacity="0.4" />
            </svg>
          </div>
        </div>

        {/* WhatsApp header */}
        <div className="flex items-center gap-[10px] px-3 py-[7px] bg-[#1f2c34]">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M15 18l-6-6 6-6" stroke="#00a884" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <div className="w-[34px] h-[34px] rounded-full bg-[#c6f432] flex items-center justify-center flex-shrink-0">
            <span className="text-black text-[11px] font-bold">P</span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-white text-[13px] font-semibold leading-none mb-[3px]">PIXT IA</p>
            <p className="text-[#8696a0] text-[11px]">online</p>
          </div>
          <div className="flex gap-[18px] pr-1">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="#8696a0" aria-hidden="true">
              <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.12-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
            </svg>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="#8696a0" aria-hidden="true">
              <circle cx="12" cy="5" r="1.5" /><circle cx="12" cy="12" r="1.5" /><circle cx="12" cy="19" r="1.5" />
            </svg>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 px-3 pt-3 pb-2 flex flex-col gap-[8px] overflow-hidden justify-end">

          {/* Lead message — received (left) */}
          <div className="self-start max-w-[188px]">
            <div
              className="bg-[#202c33] px-[10px] pt-[7px] pb-[5px]"
              style={{ borderRadius: "7px 7px 7px 0" }}
            >
              <p className="text-[#e9edef] text-[11px] leading-[1.55]">
                Oi, vi o anúncio. Perco muito paciente porque demoro pra responder, vocês resolvem isso?
              </p>
              <p className="text-[#8696a0] text-[9px] text-right mt-[3px]">14:32</p>
            </div>
          </div>

          {/* AI message 1 — sent (right) */}
          <div className="self-end max-w-[188px]">
            <div
              className="bg-[#c6f432] px-[10px] pt-[7px] pb-[5px]"
              style={{ borderRadius: "7px 7px 0 7px" }}
            >
              <p className="text-black text-[11px] leading-[1.55]">
                Resolve sim! Me conta rápido: qual o seu segmento e quantos atendimentos vocês perdem por semana por demora?
              </p>
              <div className="flex items-center justify-end gap-[3px] mt-[3px]">
                <p className="text-black/40 text-[9px]">14:32</p>
                <svg width="13" height="8" viewBox="0 0 13 8" fill="none" aria-hidden="true">
                  <path d="M1 4l2 2 4-5M5 4l2 2 4-5" stroke="rgba(0,0,0,0.4)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>

          {/* AI message 2 — sent (right) */}
          <div className="self-end max-w-[188px]">
            <div
              className="bg-[#c6f432] px-[10px] pt-[7px] pb-[5px]"
              style={{ borderRadius: "7px 7px 0 7px" }}
            >
              <p className="text-black text-[11px] leading-[1.55]">
                Encontrei um horário pra uma conversa estratégica com nosso time essa semana — confirma?
              </p>
              <div className="flex items-center justify-end gap-[3px] mt-[3px]">
                <p className="text-black/40 text-[9px]">14:33</p>
                <svg width="13" height="8" viewBox="0 0 13 8" fill="none" aria-hidden="true">
                  <path d="M1 4l2 2 4-5M5 4l2 2 4-5" stroke="rgba(0,0,0,0.4)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>

        </div>

        {/* Input bar */}
        <div className="flex items-center gap-2 px-2 py-[7px]">
          <div className="flex items-center flex-1 bg-[#2a3942] rounded-full px-[14px] py-[7px] gap-2">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle cx="12" cy="12" r="10" stroke="#8696a0" strokeWidth="1.5" />
              <path d="M8 14s1.5 2 4 2 4-2 4-2" stroke="#8696a0" strokeWidth="1.5" strokeLinecap="round" />
              <circle cx="9" cy="9.5" r="1" fill="#8696a0" />
              <circle cx="15" cy="9.5" r="1" fill="#8696a0" />
            </svg>
            <span className="text-[#8696a0] text-[11px] flex-1">Mensagem</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48" stroke="#8696a0" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
          <div className="w-[38px] h-[38px] rounded-full bg-[#00a884] flex items-center justify-center flex-shrink-0">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M12 2a3 3 0 013 3v6a3 3 0 01-6 0V5a3 3 0 013-3z" fill="white" />
              <path d="M19 10v1a7 7 0 01-14 0v-1" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" />
              <line x1="12" y1="19" x2="12" y2="22" stroke="white" strokeWidth="2" strokeLinecap="round" />
              <line x1="9" y1="22" x2="15" y2="22" stroke="white" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
        </div>

        {/* Home indicator */}
        <div className="flex justify-center pb-[8px]">
          <div className="w-28 h-[4px] bg-white/15 rounded-full" />
        </div>

      </div>
    </div>
  );
}

const badges = ["+35% em vendas", "2× mais agendamentos", "Resposta em segundos"];

export default function Hero() {
  return (
    <section className="min-h-screen bg-black flex items-center">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-20">

        {/* Logo */}
        <div className="mb-14">
          <span className="font-display text-white text-[22px] font-bold tracking-tight">
            PIXT<span className="text-[#c6f432]">.</span>
          </span>
        </div>

        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-14 lg:gap-20 xl:gap-28">

          {/* Copy */}
          <div className="flex-1 max-w-2xl">
            <h1 className="font-display text-white text-5xl sm:text-6xl xl:text-[68px] font-bold leading-[1.05] tracking-[-0.022em] mb-7">
              Tecnologia, Marketing e Vendas trabalhando juntos para o seu negócio.
            </h1>

            <p className="font-body text-[#5d5e56] text-lg xl:text-xl leading-[1.75] mb-10">
              A PIXT integra Inteligência Artificial, automações e estratégia de marketing em um único serviço — do WhatsApp à operação completa, sob medida para o que você precisa.
            </p>

            {/* Badges */}
            <div className="flex flex-wrap gap-3 mb-12">
              {badges.map((b) => (
                <span
                  key={b}
                  className="font-body inline-flex items-center gap-[7px] border border-[#c6f432]/20 px-4 py-[9px] rounded-full text-[#c6f432] text-[13px] font-medium"
                >
                  <span className="w-[5px] h-[5px] rounded-full bg-[#c6f432] flex-shrink-0" />
                  {b}
                </span>
              ))}
            </div>

            {/* CTA */}
            <a
              href="#contato"
              className="font-display inline-flex items-center gap-3 bg-[#c6f432] text-black font-bold text-[15px] px-8 py-[15px] rounded-full hover:brightness-105 active:scale-[0.98] transition-all duration-150"
            >
              Quero uma Conversa Estratégica
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>

          {/* Phone mockup */}
          <div className="w-full lg:w-auto flex justify-center lg:block">
            <PhoneMockup />
          </div>

        </div>
      </div>
    </section>
  );
}

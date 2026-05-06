import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export function FAQ() {
  const faqs = [
    {
      question: 'Je menič SUN-10K vhodný pre môj rodinný dom?',
      answer: 'Áno. SUN-10K je ideálny pre 3-fázové pripojenie — rodinné domy, farmy a malé firmy so spotrebou 8–25 kWh/deň. Podporuje on-grid aj off-grid prevádzku.',
    },
    {
      question: 'Aké batérie sú kompatibilné?',
      answer: 'Menič podporuje 48V LV batérie — lithium-ion aj olovo-kyselinové. Odporúčame Deye SE-F12-C LV (11,8 kWh), ktorá je priamo skladom a predáva sa v páre s meničom.',
    },
    {
      question: 'Funguje menič aj bez batérie?',
      answer: 'Áno, môže pracovať ako čistý on-grid menič bez batérie. Batériu možno doplniť kedykoľvek neskôr.',
    },
    {
      question: 'Čo zahŕňa 10-ročná záruka?',
      answer: '10-ročná záruka výrobcu Deye pokrýva všetky výrobné chyby. Servis a náhradné diely zabezpečuje SK Partner s.r.o. priamo na Slovensku — bez čakania na zahraničný servis.',
    },
    {
      question: 'Ako dlho trvá doručenie?',
      answer: 'Tovar je skladom v Bratislave. Doručenie kuriérom do 1–2 pracovných dní po celom Slovensku. Možné aj vyzdvihnutie osobne.',
    },
  ]

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-3">
            Časté otázky
          </h2>
          <p className="text-base text-[#6B7280]">
            Odpovede na najčastejšie otázky o našich produktoch
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-3">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border border-[#E5E7EB] rounded-lg px-5 data-[state=open]:bg-[#F8FAFF]"
            >
              <AccordionTrigger className="text-left text-[#1A1A2E] hover:text-[#1E88E5] font-medium py-4 text-sm md:text-base">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-[#6B7280] leading-relaxed pb-4 text-sm">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

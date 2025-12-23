export function DiagonalStripes() {
  return (
    <>
      <div className="absolute -left-[19px] md:-left-[31px] top-0 w-[19px] md:w-[31px] h-full border-l border-r overflow-hidden z-[70] diagonal-stripes-left" />
      <div className="absolute -right-[19px] md:-right-[31px] top-0 w-[19px] md:w-[31px] h-full border-l border-r overflow-hidden z-[70] diagonal-stripes-right" />
    </>
  )
}
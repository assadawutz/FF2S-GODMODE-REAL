import Poclicy from '@/components/page/Poclicy'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: "ทิศทางและนโยบายการดำเนินงานของผู้อำนวยการ สบร. | OKMD",
  description: "รวบรวมประกาศนโยบายการบริหารงาน นโยบายทรัพยากรบุคคล และเจตจำนงสุจริตของสำนักงานบริหารและพัฒนาองค์ความรู้ (OKMD)",
}
export default function page() {
  return (
    <div>
      <Poclicy/>
    </div>
  )
}

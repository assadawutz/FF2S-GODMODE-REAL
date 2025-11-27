import Policylist from '@/components/page/Policylist'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: "นโยบายขององค์กร | OKMD",
  description: "รวบรวมประกาศนโยบายการบริหารงาน นโยบายทรัพยากรบุคคล และเจตจำนงสุจริตของสำนักงานบริหารและพัฒนาองค์ความรู้ (OKMD)",
}
export default function page() {
  return (
    <div>
      <Policylist/>
    </div>
  )
}

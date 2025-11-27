import ActionPlan from '@/components/page/ActionPlan'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: "แผนการดำเนินงาน | OKMD",
  description: "รวบรวมประกาศนโยบายการบริหารงาน นโยบายทรัพยากรบุคคล และเจตจำนงสุจริตของสำนักงานบริหารและพัฒนาองค์ความรู้ (OKMD)",
}
export default function page() {
  return (
    <div>
      <ActionPlan/>
    </div>
  )
}

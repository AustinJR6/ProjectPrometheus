import type { Metadata } from 'next'
import type { ReactElement } from 'react'
import VolunteerForm from '../../components/VolunteerForm'

export const metadata: Metadata = {
  title: 'Get Involved - Project Prometheus',
  description: 'Volunteer and join Elias Rittenhouse in the fight for a brighter future.'
}

export default function GetInvolved(): ReactElement {
  return <VolunteerForm />
}

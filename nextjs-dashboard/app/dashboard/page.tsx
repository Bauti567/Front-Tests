import React from 'react'
import { fetchRevenue } from '../lib/data'

export default async function Page() {
  const revenue = await fetchRevenue()
  console.log(revenue)
  return (
    <div>Dashboard page</div>

  )

}



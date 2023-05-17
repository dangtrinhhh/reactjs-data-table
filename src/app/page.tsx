import Image from 'next/image'
import { NextUIProvider } from '@nextui-org/react';
import ProductList from '../components/ProductList';

export default function Home() {
  return (
    // flex min-h-screen flex-col items-center justify-between p-24
    <main className="min-h-screen">
        <ProductList />
    </main>
  )
}

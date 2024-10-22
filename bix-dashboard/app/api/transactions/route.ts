import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

export async function GET() {
  try {
    const transactionsDir = path.join(process.cwd(), 'public/transactions.json');
    const content = await fs.readFile(transactionsDir, 'utf8');
    return NextResponse.json(JSON.parse(content));
  } catch (error) {
    console.error(error);
    return NextResponse.error();
  }
}

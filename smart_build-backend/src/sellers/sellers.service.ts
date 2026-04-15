import { Injectable } from '@nestjs/common';
import { PrismaClient } from '../../generated/prisma/client';
import * as bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';

const prisma = new PrismaClient();

@Injectable()
export class SellersService {
  async register(store_name: string, email: string, password: string) {
    const hashed = await bcrypt.hash(password, 10);
    const api_key = uuidv4();

    const seller = await prisma.seller.create({
      data: {
        store_name,
        email,
        password: hashed,
        api_key,
        db_credentials: '',
      },
    });

    return { message: 'Seller registered successfully', api_key };
  }

  async findByEmail(email: string) {
    return prisma.seller.findUnique({ where: { email } });
  }
}
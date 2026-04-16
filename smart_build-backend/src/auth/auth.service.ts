import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { SellersService } from '../sellers/sellers.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(
        private sellersService: SellersService,
        private jwtService: JwtService,
    ) { }

    async login(email: string, password: string) {
        const seller = await this.sellersService.findByEmail(email);
        if (!seller) throw new UnauthorizedException('Invalid credentials');

        const match = await bcrypt.compare(password, seller.password);
        if (!match) throw new UnauthorizedException('Invalid credentials');

        const token = this.jwtService.sign({ id: seller.id, email: seller.email });
        return { access_token: token };
    }
}
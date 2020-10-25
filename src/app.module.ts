import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { AuthModule } from "./auth/auth.module";
import { PaypalModule } from "./paypal/paypal.module";
import { StripeModule } from "./stripe/stripe.module";
import { KrakenModule } from "./kraken/kraken.module";
import { ProductModule } from "./products/product.module";
import { NodemailerModule } from "./nodemailer/nodemailer.module";
import { TransactionsModule } from "./transactions/transactions.module";

@Module({
  imports: [
    TransactionsModule,
    ProductModule,
    StripeModule,
    NodemailerModule,
    PaypalModule,
    AuthModule,
    KrakenModule,
    MongooseModule.forRoot(""),
  ],
  controllers: [ AppController],
  providers: [ AppService],
})
export class AppModule {}

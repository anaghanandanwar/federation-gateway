import { IntrospectAndCompose } from '@apollo/gateway';
import { ApolloGatewayDriver, ApolloGatewayDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [GraphQLModule.forRoot<ApolloGatewayDriverConfig>({
    driver: ApolloGatewayDriver,
    server:{
      cors:true
    },
    gateway: {
      supergraphSdl: new IntrospectAndCompose({
        subgraphs: [
          { name: "locations", url: "http://localhost:3002/graphql" },
          { name: "employees", url: "http://localhost:3000/graphql" },
          { name: "projects", url: "http://localhost:3001/graphql" },
        ]
      }),
      // serviceList: [
      //   { name: "employees", url: "http://localhost:3000/graphql" },
      //   { name: "projects", url: "http://localhost:3001/graphql" },
      // ]
    }
  })],
  controllers: [],
  providers: [],
})
export class AppModule { }

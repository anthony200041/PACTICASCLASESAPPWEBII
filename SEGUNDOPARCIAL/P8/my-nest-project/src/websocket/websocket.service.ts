import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Transaction } from '../transaction.entity';
import { Socket } from 'socket.io';

@Injectable()
export class WebsocketService {
  constructor(
    @InjectRepository(Transaction)
    private transactionRepository: Repository<Transaction>,
  ) {}

  async createTransaction(transaction: Partial<Transaction>): Promise<Transaction> {
    const newTransaction = this.transactionRepository.create(transaction);
    return this.transactionRepository.save(newTransaction);
  }

  async getActiveTransactions(): Promise<Transaction[]> {
    return this.transactionRepository.find();
  }
}


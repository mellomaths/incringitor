import { CringeWord } from '../models/CringeWord.entity';

export class CringeWordRepository {

  async save(sentence: string): Promise<void> {
    await CringeWord.sync();
    const cringe = CringeWord.build({ word: sentence });
    await cringe.save();
    console.log(`CringeWordRepository.save: '${sentence}' saved with id=${cringe.id}`);
  }

  async findAll(): Promise<CringeWord[]> {
    return await CringeWord.findAll();
  }

}
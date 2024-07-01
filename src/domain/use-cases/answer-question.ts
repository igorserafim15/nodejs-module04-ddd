import { Answer } from "../entities/answer"
import { AnswersRepository } from "../repositories/answers-repository"

type AnswerQuestionUseCaseRequest = {
  instructorId: string
  questionId: string
  content: string
}

export class AnswerQuestionUseCase {
  constructor(private answeryRepository: AnswersRepository) {}

  async execute(props: AnswerQuestionUseCaseRequest) {
    const answer = new Answer(props.content, props.instructorId, props.questionId)

    await this.answeryRepository.create(answer)

    return answer
  }
}
import { Answer } from "../entities/answer"

type AnswerQuestionUseCaseRequest = {
  instructorId: string
  questionId: string
  content: string
}

export class AnswerQuestionUseCase {
  execute(props: AnswerQuestionUseCaseRequest) {
    const answer = new Answer(props.content)

    return answer
  }
}
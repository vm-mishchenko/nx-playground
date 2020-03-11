import {
  BuilderContext,
  BuilderOutput,
  createBuilder
} from "@angular-devkit/architect";
import { Observable, of } from "rxjs";
import { tap } from "rxjs/operators";
import { NpmPublisherBuilderSchema } from "./schema";

export function runBuilder(
  options: NpmPublisherBuilderSchema,
  context: BuilderContext
): Observable<BuilderOutput> {
  return of({ success: true }).pipe(
    tap(() => {
      context.logger.info("Builder ran for npm-publisher");
    })
  );
}

export default createBuilder(runBuilder);

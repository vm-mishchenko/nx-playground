import { BuilderContext, BuilderOutput } from "@angular-devkit/architect";
import { Observable } from "rxjs";
import { NpmPublisherBuilderSchema } from "./schema";
export declare function runBuilder(options: NpmPublisherBuilderSchema, context: BuilderContext): Observable<BuilderOutput>;
declare const _default: import("@angular-devkit/architect/src/internal").Builder<NpmPublisherBuilderSchema>;
export default _default;

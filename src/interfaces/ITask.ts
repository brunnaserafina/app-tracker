import IProject from "@/interfaces/IProject";

export default interface ITarefa {
  durationInSeconds: number;
  description: string;
  project: IProject;
}

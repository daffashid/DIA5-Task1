export class User{
    fullName: string = "";
    experience: number = 0;
    previousJob: string = "";

    setName(fullName: string){
        this.fullName = fullName;                   
    }

    getName(): string {
        return this.fullName;
    }

    setExperience(experience: number){
        this.experience = experience;                   
    }

    getExperience(): number {
        return this.experience;
    }

    setPreviousJob(previousJob: string){
        this.previousJob = previousJob
    }

    getPreviousJob(): string {
        return this.previousJob
    }
}

export class Frontend extends User {

}

export class Backend extends User {

}


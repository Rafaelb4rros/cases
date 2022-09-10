export class Clock {
    private hours: number;
    private minutes: number;

	constructor(hour: number, minute?: number) {
        const [hoursFromMinute, minutesRemaing] = this.hoursFromMinutes(minute ?? 0);
        this.hours = Math.floor(this.fixHours(hour + hoursFromMinute));
        this.minutes = Math.floor(minutesRemaing);
	}

    private fixHours(hours: number): number {
        return Math.sign(hours) === -1 ? 24 + hours % 24 : hours % 24;
    };

    private hoursFromMinutes(minutes: number): number[] {
        return Math.sign(minutes) === -1 ?
            [this.fixHours(minutes / 60), 60 + minutes % 60] :
            [minutes / 60, minutes % 60];
    };

	public toString(): string {
	    return `${String(this.hours).padStart(2, '0')}:${String(this.minutes).padStart(2, '0')}`
	}
	
	public plus(minutes: number): Clock {
        return new Clock(this.hours, this.minutes + minutes);
	}
	
	public minus(minutes: number): Clock {
        return new Clock(this.hours, this.minutes - minutes);
	}
	
	public equals(other: Clock): boolean {
        return this.hours === other.hours &&
            this.minutes === other.minutes;
	}
}


import {AbstractEntity} from "@/model/AbstractEntity";
import {Address} from "@/model/Address";
import {Aprove} from "@/model/enum/Aprove";
import {Occurrences} from "@/model/Occurrences";
import {Animal} from "@/model/Animal";
import {User} from "@/model/User";

export class Caregiver extends AbstractEntity {
    firstName!: string;
    lastName!: string;
    contact!: string;
    address!: Address;
    physicalSpace!: string;
    spending!: number;
    capacityAnimals!: number;
    approved!: boolean;
    pending!: boolean;
    rejected!: boolean;
    occurrences!: Occurrences;
    animal!: Animal;
    user!: User;
}
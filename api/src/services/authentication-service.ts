import { IdentityResponse, UserCredential } from '../models/data/identity';
import { User, UserClassification, UserWithoutId } from '../models/data/user';
import { Credential, IdentityService } from './identity-service';
import { UserService } from './user-service';

export class AuthenticationService {
  identityService: IdentityService;
  userService: UserService;
  constructor(identityService: IdentityService, userService: UserService) {
    this.identityService = identityService;
    this.userService = userService;
  }

  createIdentity = async (userWithoutId: UserWithoutId): Promise<IdentityResponse> => {
    const identity = await this.identityService.createIdentity();
    const user: User = {
      ...userWithoutId,
      userId: identity.key.public
    };

    const result = await this.userService.addUser(user);

    if (!result?.result?.n) {
      throw new Error('Could not create user identity!');
    }
    return {
      ...identity
    };
  };

  createVerifiableCredential = async () => {
    const username = 'first-user';
    const organization = 'IOTA';
    const registrationDate = '2021-02-12T14:58:05+01:00';
    const classification = UserClassification.human;
    const id = 'did:iota:9e7mbNZr1zh1hAVS4a8MZHdsJUjyP1pud66vRn8m8PnJ';
    const userCredential: Credential<UserCredential> = {
      type: 'UserCredential',
      subject: {
        id,
        username,
        organization,
        registrationDate,
        classification
      }
    };
    const cv = this.identityService.createVerifiableCredential<UserCredential>(userCredential);
    // TODO update user to be verified!
    return cv;
  };

  checkVerifiableCredential = async (vc: any) => {
    const res = this.identityService.checkVerifiableCredential(vc);
    // TODO update user to be verified!
    return res;
  };
}
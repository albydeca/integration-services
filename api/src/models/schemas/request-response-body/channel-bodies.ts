import { Type } from '@sinclair/typebox';
import { TopicSchema } from '../channel-info';

export const CreateChannelBodySchema = Type.Object({
	subscriptionPassword: Type.Optional(
		Type.String({
			minLength: 8,
			description:
				'If a subscriptionPassword is set, all data is encrypted with the password. It need to be made sure, the subscription password is sent when interacting with the APIs of the channel-service and subscription-service.'
		})
	), // TODO#156 use to decrypt/encrypt data and state
	encrypted: Type.Boolean(),
	topics: Type.Array(TopicSchema),
	hasPresharedKey: Type.Optional(
		Type.Boolean({
			description:
				'If the channel has a preshared key (hasPresharedKey=true) but non is set in the presharedKey property it will be generated by the api.'
		})
	), // TODO#156 remove optional, this will break current clients!
	seed: Type.Optional(Type.Union([Type.String({ minLength: 1, description: 'If left empty the api will generate a seed.' }), Type.Null()])),
	presharedKey: Type.Optional(
		Type.String({
			minLength: 32,
			maxLength: 32,
			description: 'If the channel has a preshared key (hasPresharedKey=true) but non is defined here the presharedKey will be generated by the api.'
		})
	)
});

export const CreateChannelBodyResponseSchema = Type.Object({
	seed: Type.Optional(Type.Union([Type.String({ minLength: 1 }), Type.Null()])),
	channelAddress: Type.String({ minLength: 10 }), // TODO clarify exact length of channelAddresse to validate them in the schema when starting with the streams integration!
	presharedKey: Type.Optional(
		Type.String({
			minLength: 32,
			maxLength: 32
		})
	)
});

export const AddChannelLogBodySchema = Type.Object({
	type: Type.String({ minLength: 1 }),
	creationDate: Type.Optional(Type.String({ format: 'date-time' })),
	metadata: Type.Optional(Type.Any()),
	payload: Type.Any()
});

export const ChannelDataSchema = Type.Object({
	link: Type.String(),
	channelLog: AddChannelLogBodySchema
});

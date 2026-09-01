import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';

const budgets = ['sprint', 'studio', 'partner', 'unsure'] as const;

export const actions: Actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const values = {
			name: String(data.get('name') ?? '').trim(),
			email: String(data.get('email') ?? '').trim(),
			company: String(data.get('company') ?? '').trim(),
			budget: String(data.get('budget') ?? '').trim(),
			message: String(data.get('message') ?? '').trim()
		};

		const errors: Partial<Record<keyof typeof values, string>> = {};
		if (!values.name) errors.name = 'Tell us your name.';
		if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(values.email)) errors.email = 'Enter a valid email address.';
		if (!budgets.includes(values.budget as (typeof budgets)[number])) errors.budget = 'Pick the closest option.';
		if (values.message.length < 20) errors.message = 'Give us at least a sentence or two.';

		if (Object.keys(errors).length > 0) {
			return fail(400, { errors, values });
		}

		// Demo site: nothing is sent anywhere.
		return { success: true, name: values.name };
	}
};

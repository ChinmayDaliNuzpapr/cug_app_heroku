import React from 'react';
import AskQuestion from '../../components/Workflow/AskQuestion';

//default export
export default {
	title: 'Workflow/AskQuestion', //
	component: AskQuestion,
};

//named export for variations
export const Default_Comment = () => <AskQuestion />;

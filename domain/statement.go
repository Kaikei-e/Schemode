package domain

type TheOpinion struct {
	Mode int
	ID   int
	Text string
}

type TheOpinionResponse struct {
	Mode string
	ID   int
	Text string
}

func ModeNumToText(mode int) string {
	switch mode {
	case 0:
		return "Healthy Adult Mode"
	case 1:
		return "Vulnerable Child Mode"
	case 2:
		return "Dysfunctional Parent Mode"
	default:
		return "Unknown"
	}
}

func GroupByMode(statements []TheOpinion) map[int][]TheOpinion {
	grouped := make(map[int][]TheOpinion)
	for _, v := range statements {
		grouped[v.Mode] = append(grouped[v.Mode], v)
	}
	return grouped
}

# Expose argo
kubectl port-forward svc/argocd-server -n argocd 8989:443
